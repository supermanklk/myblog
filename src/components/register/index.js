import React from 'react';
import './index.scss';
import { Modal, Button, Tabs, Input, Icon, Checkbox } from 'antd';
// import {isPhone} from '../../public/util/index';
import {isPhone} from 'util/index';
// import Dimensions from 'react-dimensions';
const TabPane = Tabs.TabPane;

/**
 * @description
 * @author Bin
 * @date 2018-11-20
 * @class UserRegister
 * @extends {React.Component}
 */
class UserRegister extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            visible: true,
            id : '',        //账号  必选
            id_placeholder : '',    //账号错误的时候,显示的报错内容
            password : '',      //密码  必选
            password_placeholder : '',      //密码错误的时候,显示的报错内容 
            auto7 : false,     //默认7天自动登录为false 可选
            agreeProtocol : false,        //是否同意注册协议
            registerPhone : '',     //注册手机号
            registerPhone_placeholder : '', //注册手机存在或者错误时候,显示报错内容
            verificationCode : '',       //验证码
            verificationCode_placeholder : '',      //验证码错误的时候显示报错内容
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
    handleOk = (e) => {
    console.log(e);
    this.setState({
        visible: false,
    });
    }

    /**
     * @description     Tab面板切换时候的回调 
     * @author Bin
     * @date 2018-11-20
     * @param {*} key 1 与 2 的情况, 如果1到2,1的内容要初始化
     * @memberof UserRegister
     */
    callback = (key) => {
        console.log(key);
        if(key == 1) {
            // 恢复2的初始化
            this.setState({
                agreeProtocol : false,        //是否同意注册协议
                registerPhone : '',     //注册手机号
                registerPhone_placeholder : '', //注册手机存在或者错误时候,显示报错内容
                verificationCode : '',       //验证码
                verificationCode_placeholder : '',      //验证码错误的时候显示报错内容
            })
        } else if(key == 2) {
            // 恢复1的初始化
            this.setState({
                id : '',        //账号  必选
                id_placeholder : '',    //账号错误的时候,显示的报错内容
                password : '',      //密码  必选
                password_placeholder : '',      //密码错误的时候,显示的报错内容 
                auto7 : false,     //默认7天自动登录为false 可选
               
            })
        }
    }

    /**
     * @description 关闭弹窗
     * @memberof UserRegister
     */
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.props.onClose();
    }

    /**
     * @description 点击 7天内自动登录 或者 同意`南工在线学习系统 时候触发
     * @memberof onChangeAgree
     */
    onChangeAgree = (e,type) => {
        // type == 1时候为7天自动
        if(type == 1) {
            this.setState({
                auto7 : e.target.checked
            })
        } else {
            this.setState({
                agreeProtocol  : e.target.checked
            })
        }
        console.log(`checked = ${e.target.checked}`);
    }


    /**
     * @description     实时修改账号与密码
     * @memberof UserRegister
     * @param type 1,2,3,4 分别 登录账号 登录密码 注册账号 验证码
     */
    change = (e,type) => {
        if(type == 1) {
            this.setState({
                id : e.target.value
            })
        }else if(type == 2){
            this.setState({
                password : e.target.value
            })
        }else if(type == 3) {
            this.setState({
                registerPhone : e.target.value
            })
        }else if(type == 4) {
            this.setState({
                verificationCode : e.target.value
            })
        }
       
    }

    
    /**
     * @description     验证输入的信息 [1 id] [2 密码] 
     * @memberof UserRegister
     */
    verification = (e,type) => {
        let value = e.target.value;
        switch (type) {
            // 登录输入账号
            case 1 : 
                if(isPhone(value)){
                    this.setState({id : value, id_placeholder : ''});
                } else {
                    this.setState({id : value,id_placeholder : '请输入正确的账号'});
                }
                break;
            // 登录输入密码
            case 2 :
                if(('' + value).length < 6) {
                    this.setState({password_placeholder : '请输入正确的密码'});
                } else {
                    this.setState({password : value, password_placeholder : ''});
                }
                break;
            // 注册输入手机号
            case 3 :
                if(isPhone(value)){
                    this.setState({registerPhone : value, registerPhone_placeholder : ''});
                } else {
                    this.setState({registerPhone : value,registerPhone_placeholder : '请输入正确的账号'});
                }
                break;
            // 注册输入验证码
            case 4 :
                if(value == 77) {
                    this.setState({verificationCode : value, verificationCode_placeholder : ''});
                } else {
                    this.setState({verificationCode : value, verificationCode_placeholder : '验证码错误,请重试'})
                }
                break;
            // 登录是否选择七天自动登录
            case 5 :
                break;
            // 注册是否选择同意
            case 6 :
                break;
            default :
                break;
        }
        console.log(e.target.value,type);
    }

    render() {
        return (
            <div>
                <Modal
                maskClosable = {false}
                footer={null}
                title=""
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width = {380}
                >
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        
                        {/* 登录的Tab */}
                        <TabPane tab="登录" key="1">
                            <Input className = 'input_phone' onChange = {(e) => {this.change(e,1)}} value = {this.state.id} onBlur = {(e) => {this.verification(e,1)}} type="text" placeholder = '请输入登录手机号/邮箱'/>
                            <p className = 'prompt'>{this.state.id_placeholder}</p>
                            <Input className = 'input_phone'  onChange = {(e) => {this.change(e,2)}} type = 'password' value = {this.state.password} onBlur = {(e) => {this.verification(e,2)}} placeholder = '请输入密码'/>
                            <p className = 'prompt'>{this.state.password_placeholder}</p>
                            <div className = 'login_quest'>
                                <Checkbox checked = {this.state.auto7} onChange = {(e) => {this.onChangeAgree(e,1)}}>7天内自动登录</Checkbox>
                                <p>
                                    <span>找回密码&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>无法登录</span>
                                </p>
                            </div>
                            <h4 className = 'registerBtn'>登录</h4>
                        </TabPane>

                        {/* 注册的Tab */}
                        <TabPane tab="注册" key="2">
                            <Input className = 'input_phone' type="text" value = {this.state.registerPhone}  onBlur = {(e) => {this.verification(e,3)}} onChange = {(e) => {this.change(e,3)}} placeholder = '请输入注册手机号'/>
                            <p className = 'prompt'>{this.state.registerPhone_placeholder}</p>
                            <Input className = 'input_check' type="text" value = {this.state.verificationCode} onBlur = {(e) => {this.verification(e,4)}} onChange = {(e) => {this.change(e,4)}} placeholder = '请输入验证码'/>
                            <p className = 'verificationCode'><Icon type="redo" /><span>KF98</span></p>
                            <p className = 'prompt'>{this.state.verificationCode_placeholder}</p>
                            <Checkbox checked = {this.state.agreeProtocol} onChange = {(e) => {this.onChangeAgree(e,2)}}>同意</Checkbox>
                            <span>`南工在线学习系统`</span>
                            <h4 className = 'registerBtn'>注册</h4>
                            <p className = 'share'>
                                <span className = 'share_left'>其他方式登录:</span>
                                <span className = 'share_right'>QQ 微信 微博</span>
                            </p>
                        </TabPane>
                        
                    </Tabs>
                </Modal>                
            </div>
        );
    }
}

export default UserRegister;