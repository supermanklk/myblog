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
                    <Menu.Item>主页</Menu.Item>
                    <Menu.Item><a href="#/home">新闻</a></Menu.Item>  
                    <Menu.Item> <a href="#/learn">求职/招聘</a> </Menu.Item> 
                    <Menu.Item><a href="#/it">学习编程</a></Menu.Item>   
                    <Menu.Item><a href="#/imgs">图片</a></Menu.Item> 
                    <Menu.Item><a href="#/movies">电影</a></Menu.Item> 
                    <Menu.Item><a href="#/music">音乐</a></Menu.Item> 
                    <Menu.Item><a href="#/mood">心情</a></Menu.Item> 
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>待定四项</span></span>}>
                        <Menu.Item key="7">你是猪大</Menu.Item>
                        <Menu.Item key="8">你是猪二</Menu.Item>
                        <Menu.Item key="9">你是猪三</Menu.Item>
                        <Menu.Item key="10">你是猪四</Menu.Item> 
                    </SubMenu>
                    <Menu.Item><Button onClick = {this.register}>注册</Button></Menu.Item> 
                    <Menu.Item><Button onClick = {this.register}>登录</Button></Menu.Item> 
                </Menu>
          </div>
        )
    }
}


export default Nav