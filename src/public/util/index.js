import fetchJsonp from 'fetch-jsonp';
import {message} from 'antd';
import domain from 'components/biz/env/domain';
var iTime;
var Tools = {
    // 验证手机号的有效性,可以接受 Number 也可以接受 字符串
    isPhone(phone) {
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
            return false; 
        }else{
            return true;
        } 
    },

    // fetch接口封装
    api: function({ url, args='', callback }) {
        let argsStr = '';
        if(args!='') {
            for(let key in args) {
                argsStr += key + '=' + args[key] + '&';
            }
            argsStr = '?' + argsStr.substr(0, argsStr.length-1);
        }
        
        fetch(url+argsStr)
        .then(response => response.json())
        .then(res => {
            callback(res);
        });
    },

    /**
     * 把json解析成字符串
     * author Bin
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    childStr: function (data) {
        let childArr = [];
        if(typeof(data) == 'object'){
        for (let key in data) {
            for (let i in this.childStr(data[key])) {
            childArr.push('[' + key + ']' + this.childStr(data[key])[i]);
            }
        }
        } else {
        childArr.push(('=' + encodeURIComponent(data)));
        }
        return childArr;
    },
    /**
     * 把json解析成字符串
     * author bin
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    buildStr: function (data){
        let str = '';
        for (let key in data) {
        for (let i in this.childStr(data[key])) {
            str += (key + this.childStr(data[key])[i] + '&');
        }
        }
        return str.substr(0, str.length-1);
    },
    buildArgs:function(formData,args,keys = []){
        for(let i in args){
            if(typeof(args[i]) == 'object'){
                let newkeys = [...keys];
                if(newkeys.length > 0){
                    newkeys[0] = newkeys[0] + `[${i}]`;
                }else{
                    newkeys.push(i);
                }
                this.buildArgs(formData,args[i],newkeys);
            }else{
                let key = '';
                keys.map( c => {
                    this.isEmpty(key) ? key = c : key += `[${c}]`;
                })
                this.isEmpty(key) ? formData.append(i,args[i]) : formData.append(key+`[${i}]`,args[i]);
            }
        }
        return formData;
    },
    /**
     * 调用php接口方法
     * author: cbl
     * @param  {[type]}   method   [接口名称]
     * @param  {String}   args     [参数 默认为空]
     * @param  {String}   mode     [默认jsonp 否则为json]
     * @param  {Function} callback [成功回调]
     * @return {[type]}            [description]
     */
/*     api: function({method,args='',mode='jsonp',callback,errCallback = undefined,isloading = true,host = domain.host}){
        //trade_source 默认值 TAO
        if(this.isEmpty(args)){
            args = {
                trade_source: 'a'
            };
        }else{
            args.trade_source = 'b';
        }
        var self = this;
        if(isloading)self.loading('show','数据加载中，请稍后……');
        if (mode == 'jsonp') {
        args = this.buildStr(args);
        if(args!=''){
            args = '?'+args;
        }
        fetchJsonp(host + method + args, {
            jsonpCallback: 'callback'
        })
        .then((response) => response.json())//返回数据类型json
        .then((responseText) => {
            if (isloading) {
                self.loading('hide');
            } else {
                // statement
            }

            if(responseText == 'fail'){
            //遇见错误时弹框提示   by Mothpro
            //session获取失败登录失效
            message.error('出错了');
            }else{
                try {
                    callback(responseText);
                } catch (e) {
                    console.error("后台php调用失败"+method,e);
                }
            }
        })
        .catch((error) => {
            if (isloading) {
                self.loading('hide');
            } else {
            }
            if (errCallback) {
                errCallback(error);
            } else {

            }
        });
        } else {
            var formData = new FormData();
            formData = this.buildArgs(formData,args);
            fetch(`${host}${method}`, {
                method : 'POST',
                mode : 'cors',
                credentials: 'include',
                body : formData
            }).then((res)=>res.json()).then(function(responseText){
                if (isloading) {
                    self.loading('hide');
                } else {
                // statement
                }
                if(responseText == 'fail'){
                    //session获取失败登录失效
                }else{
                    callback(responseText);
                }
            }, function(error){
                if (isloading) {
                    self.loading('hide');
                } else {
                // statement
                }
                //错误处理，待补充
                // console.log(error);
                if (errCallback) {
                    errCallback(error);
                } else {

                }
            });
        }
    }, */

    loading:function(state,text = "数据加载中，请稍后",type = 1){
        let element = document.getElementById("c-loading");
        if(state == 'show'){
            if(this.isEmpty(element)){
                let html =`<div id="c-loading" style="display:none">
                    <div style="background: #000;position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 9999;transition: opacity .3s;opacity: 0.05;"></div>
                    <div  style="position: fixed;right: 40%;bottom: 45%;z-index:999999;margin-right:10px;padding: 20px;background-color: white;">
                        <div>
                        <img src = "//q.aiyongbao.com/trade/img/loading.gif" style="margin-right:10px;vertical-align: middle;"/>
                        <font style="vertical-align: middle;color:#999">${text}</font>
                        </div>
                    </div>
                </div>`;
                if(type == 0) html = `<div id="c-loading" style="display:none;position: fixed;right: 40%;bottom: 45%;z-index: 999999;margin-right:10px;"><img src = "//q.aiyongbao.com/trade/img/loading.gif" style="margin-right:10px;vertical-align: middle;"/><font style="vertical-align: middle;color:#999">${text}</font></div>`;
                let div = document.createElement('div');
                div.innerHTML = html;
                document.getElementById('root').appendChild(div);
                iTime = setTimeout(function(){
                    try{
                        document.getElementById("c-loading").style.display = "block";
                    }catch(e){
                    }
                    setTimeout(()=>{
                        let element = document.getElementById("c-loading");
                        if (iTime !="")clearTimeout(iTime);
                        if(element) element.parentNode.removeChild(element);
                    },5000)
                },600);
  
            }
  
        }else{
            if (iTime !="")clearTimeout(iTime);
            if(element) element.parentNode.removeChild(element);
  
        }
    },
    /* 判断是否为空 */
    isEmpty: function(key){
        if (typeof(key) === 'string') {
            key = key.replace(/(^\s*)|(\s*$)/g, '');
            if (key == '' || key == null || key == 'null' || key == undefined || key == 'undefined') {
                return true
            } else {
                return false
            }
        } else if (typeof(key) === 'undefined') {
            return true;
        } else if (typeof(key) == 'object') {
            for(let i in key){
                return false;
            }
            return true;
        }else if (typeof(key) == 'boolean'){
            return false;
        }
    },
}

export const isPhone = Tools.isPhone.bind(Tools);
export const api = Tools.api.bind(Tools);
export const isEmpty = Tools.isEmpty.bind(Tools);