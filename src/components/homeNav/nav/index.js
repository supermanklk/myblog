import React from 'react'
import { Menu, Icon, Layout, Button, Modal } from 'antd'
import showRegisater from '../../register/api';
import { hashHistory } from 'react-router'
const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const confirm = Modal.confirm;
// const MenuItemGroup = Menu.ItemGroup

class Nav extends React.Component {
    
    register = () => {
        showRegisater();
    }

    userout = () => {
        // 用户退出
        confirm({
            title: '确定退出?',
            content: '退出以后,本地的信息将会被清除',
            onOk() {
                sessionStorage.clear();
                hashHistory.push({
                    pathname: '/mood',
                });
            },
            onCancel() {},
          });
    }

    componentDidMount() {
        // 默认退出是不显示的
        if(!sessionStorage.getItem('userLogin'))  {
            document.getElementById('userout').style.display = 'none';
        }
    }

    render() {
        return (
            <div id = "home_nav"> 
                <Menu 
                    mode = "horizontal" 
                    theme = "dark"  
                >
                    <Menu.Item key = "22">主页</Menu.Item>
                    <Menu.Item key = "21"><a href="#/home">个人中心</a></Menu.Item>  
                    <Menu.Item key = "20"> <a href="#/learn">求职/招聘</a> </Menu.Item> 
                    <Menu.Item key = "19"><a href="#/it">学习编程</a></Menu.Item>   
                    {/* <Menu.Item key = "18"><a href="#/imgs">图片</a></Menu.Item>  */}
                    {/* <Menu.Item key = "17"><a href="#/movies">电影</a></Menu.Item>  */}
                    <Menu.Item key = "16"><a href="#/music">音乐</a></Menu.Item> 
                    <Menu.Item key = "15"><a href="#/mood">在线学习</a></Menu.Item> 
                    {/* <SubMenu key="sub2" title={<span><Icon type="setting" /><span>待定四项</span></span>}>
                        <Menu.Item><a href="#/slipGame">sss</a></Menu.Item>
                        <Menu.Item key="8">你是猪二</Menu.Item>
                        <Menu.Item key="9">你是猪三</Menu.Item>
                        <Menu.Item key="10">你是猪四</Menu.Item> 
                    </SubMenu> */}
                    <Menu.Item id = "nav_register"><Button onClick = {this.register}>注册</Button></Menu.Item> 
                    <Menu.Item id = "nav_login"><Button onClick = {this.register}>登录</Button></Menu.Item>
                    {/* <SubMenu id = "nav_userCenter" key="sub3" title={<span><Icon type="setting" /><span>个人中心</span></span>}>
                        <Menu.Item key="11">supermanbin1</Menu.Item>
                        <Menu.Item key="12">supermanbin2</Menu.Item>
                        <Menu.Item key="13">supermanbin3</Menu.Item> 
                    </SubMenu> */}
                    <Menu.Item id = "nav_lyout" key = "14"><Button id="userout" onClick = {this.userout}>退出</Button></Menu.Item>
                </Menu>
          </div>
        )
    }
}


export default Nav