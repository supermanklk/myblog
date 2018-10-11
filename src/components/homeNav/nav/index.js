import React from 'react'
import { Menu, Icon, Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Nav extends React.Component {
    render() {
        return (
            <div> 
                <Menu 
                    mode = "horizontal"
                    theme = "dark" 
                >
                    <Menu.Item>主页</Menu.Item>  
                    <Menu.Item><a href="#/home">新闻</a></Menu.Item> 
                    <Menu.Item> <a href="#/learn">关于学习</a> </Menu.Item>
                    <Menu.Item>学习编程</Menu.Item>
                    <Menu.Item>图片</Menu.Item>
                    <Menu.Item>电影</Menu.Item> 
                    <Menu.Item>音乐</Menu.Item> 
                    <Menu.Item>心情</Menu.Item> 
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                </Menu>
          </div>
        )
    }
}


export default Nav