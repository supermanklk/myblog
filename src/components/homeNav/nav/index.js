import React from 'react'
import { Menu, Icon, Layout, Button } from 'antd'
import showRegisater from '../../register/api';
const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

// const MenuItemGroup = Menu.ItemGroup

class Nav extends React.Component {
    
    register = () => {
        showRegisater();
    }

    render() {
        return (
            <div id = "home_nav"> 
                <Menu 
                    mode = "horizontal" 
                    theme = "dark"  
                >
                    <Menu.Item key = "22">主页</Menu.Item>
                    <Menu.Item key = "21"><a href="#/home">新闻</a></Menu.Item>  
                    <Menu.Item key = "20"> <a href="#/learn">求职/招聘</a> </Menu.Item> 
                    <Menu.Item key = "19"><a href="#/it">学习编程</a></Menu.Item>   
                    <Menu.Item key = "18"><a href="#/imgs">图片</a></Menu.Item> 
                    <Menu.Item key = "17"><a href="#/movies">电影</a></Menu.Item> 
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
                    <SubMenu id = "nav_userCenter" key="sub3" title={<span><Icon type="setting" /><span>个人中心</span></span>}>
                        <Menu.Item key="11">supermanbin1</Menu.Item>
                        <Menu.Item key="12">supermanbin2</Menu.Item>
                        <Menu.Item key="13">supermanbin3</Menu.Item> 
                    </SubMenu>
                    <Menu.Item id = "nav_lyout" key = "14"><Button onClick = {this.register}>退出</Button></Menu.Item>
                </Menu>
          </div>
        )
    }
}


export default Nav