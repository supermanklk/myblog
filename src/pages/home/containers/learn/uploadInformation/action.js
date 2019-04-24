const TYPE = 'TYPE'
export const OPEN_VISIBLE = 'OPEN_VISIBLE'
export const CLOSE_VISIBLE = 'CLOSE_VISIBLE'
export const CHANGE_NAME = 'CHANGE_NAME'
/**
 * Author : Bin
 * date : 2018/9/21
 */

export function demo() {
    let data = 'demo'
    return (dispatch,getState) => {
        // 说明：此时article组件已经与redux配合了，组件内已经有 state属性与demo属性。已经在组件index内打印出来，可以查看后台。
        // 具体流程就是： 在index.js调用 this.props.demo 
        // 触发dispatch 携带数据到reducer，根据dispatch的type做数据处理，并返回给index组件页面. 
        // 只要触发了action 没问题的情况下页面的this.props就会有新的值
        dispatch({
            type : TYPE,
            payload : data  
        })
    }
}

// 开启弹窗
export function openVisible() { 
    return (dispatch) => {
        dispatch({
            type : OPEN_VISIBLE
        })
    }
}
// 关闭弹窗
export function closeVisible() { 
    return (dispatch) => {
        dispatch({  
            type : CLOSE_VISIBLE,
            kind : 2
        })
    }
} 

export function onChangeUserName(e) { 
    console.log(e.target.value)
    return (dispatch) => {
        dispatch({
            type : CHANGE_NAME,
            name : e.target.value
        })
    }
}

export function receiveData(data) {
    // data 这个data应该包含 
    // type 1 : 找工作  2 : 猎手
    // name 
    // country
    // email
    // phone
    // sex
    // position 职位
    // personWeb 个人网站
    // where 毕业院校
}

// 关闭弹窗
export function handleCancel() {
    console.log(11);
}

export function  handleOk() {
    console.log(22);    
}