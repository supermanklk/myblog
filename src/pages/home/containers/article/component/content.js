import React, { Component } from 'react';
import { Card,Icon,List,Avatar, Button, Modal} from 'antd';
const confirm = Modal.confirm;
export default class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            email : '739367755@qq.com', // email
            phone : '17637794541', // 手机号
            visible : false
        }
    }



    Binding = (type) => {
        if(type == '3') {
            // 关于qq 重新打开一个页面
            window.open('https://id.qq.com/login/ptlogin.html');
        }
        if(type == '2') {
            // 关于微博的
            window.open('https://weibo.com/login.php?url=http%3A%2F%2Fvip.weibo.com%2F');
        }
        if(type == '1') {
            // 关于微信
            window.open('https://wx.qq.com/');
        }
    }

    changeType = (type) => {
        // type 1 修改邮箱
        if(type == 1) {
            console.log(1);
            confirm({
                title: '邮箱管理',
                content: '是否要更新绑定的邮箱',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        // type 2 立即验证
        if(type == 2) {
            console.log(2);
            confirm({
                title: '验证邮箱?',
                content: '将要去验证邮箱',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        // type 3 绑定手机号
        if(type == 3) {
            console.log(3);
            confirm({
                title: '绑定手机',
                content: '是否重新绑定手机号?',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
         // type 4 修改密码
         if(type == 4) {
            console.log(4);
            confirm({
                title: '密码管理',
                content: '是否要修改密码',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        

    }

    lookOrder = () => {
        this.setState({
            visible: true,
        });
    }

    // 点击了ok
    handleOk = () => {
        this.setState({
            visible: false,
        });
    }
    // 点击了取消
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render(){
        const { email, phone } = this.state;
        const data = [
            {
              title: '邮箱',
              content:'可用邮箱加密码登录慕课网，可用邮箱找回密码',
              other: email,
              red:'已绑定,但未验证',
              btn1:<Button onClick = {() => {this.changeType(1)}}>更改</Button>,
              btn2:<Button onClick = {() => {this.changeType(2)}}>立即验证</Button>
            },
            {
              title: '手机',
              content:'可用手机号加密码登录慕课网，可通过手机号找回密码  无法绑定',
              red:  phone == '' ? '请绑定手机号' : phone,
              btn2:<Button onClick = {() => {this.changeType(3)}}>立即绑定</Button>
            },
            {
              title: '密码',
              content:'用于保护账号信息和登录安全',
              other:'已设置',
              btn2:<Button onClick = {() => {this.changeType(4)}}>修改</Button>
            },
            {
              title: '社交账号',
              content:'绑定第三方账号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享'
            },
          ];


        return(
            <div className="MainContent">
                <Modal
                    title="订单信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        <Card
                        title="React服务器渲染原理解析与实践"
                        extra={<a href="#">More</a>}
                        style={{ width: 300 }}
                        >
                            <p>2019-04-22 14:40:37</p>
                        </Card>
                        <Card
                        title="新版React Native+Redux打造高质量上线App"
                        extra={<a href="#">More</a>}
                        style={{ width: 300 }}
                        >
                            <p>2019-04-28 18:57:13</p>
                        </Card>
                    </p>
                </Modal>
                <Card 
                title={<p style={{display:"inline-block"}}><span>账号绑定</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:"10px",color:"#CDC1C5"}}>完成</span><span style={{fontSize:"10px",color:"red"}}>3/4</span></p>}
                extra={<a   onClick = {this.lookOrder} href="#" style={{color:"#CDC1C5"}}><Icon type="question-circle" theme="twoTone" />  查看订单</a>} 
                bordered={false} 
                >
               <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                <List.Item actions={[<span>{item.btn1}</span>,<span>{item.btn2}</span>]}>
                    <List.Item.Meta
                         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                         title={<p><strong>{item.title}</strong><span>{item.other}</span><span style={{color:"red"}}>{item.red}</span></p>}
                         description={item.content}
                    />
                </List.Item>
    )}
  />        
            
            
            <div className="iconDiv">
            {/* <div className="iconDiv-item iconDiv-item1">
                    <div className="div-icon">
                        <div><Icon type="wechat" style={{ fontSize: '75px' }} /></div>
                        <div className="icon_list">
                            <ul>
                                <li><strong>微信</strong></li>
                                <li><span style={{color:"red"}}>未绑定</span></li>
                                <li><Button style={{padding:" 0px 5px"}}>添加绑定</Button></li>
                            </ul>
                        </div>
                    </div>
            </div> */}
            <div className="iconDiv-item iconDiv-item2">
                     <div className="div-icon">
                         <div><Icon type="weibo" style={{ fontSize: '75px' }} /></div>
                         <div className="icon_list">
                            <ul>
                                <li><strong>微博</strong></li>
                                <li><span style={{color:"red"}}>未绑定</span></li>
                                <li><Button style={{padding:" 0px 5px"}}>添加绑定</Button></li>
                            </ul>
                        </div>
                     </div>
            </div>
            <div className="iconDiv-item iconDiv-item3">
                    <div className="div-icon">
                        <div><Icon type="qq"  style={{ fontSize: '75px', color: '#08c' }}/></div>
                        <div className="icon_list">
                            <ul>
                                <li><strong>QQ</strong></li>
                                <li><span style={{color:"red"}}>已绑定</span></li>
                                <li><Button onClick = {() => {this.Binding(3)}} style={{padding:" 0px 5px"}}>解除绑定</Button></li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>

            </Card>
            </div>
        )
    }
}