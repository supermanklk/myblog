import React from 'react';
import { Menu, Icon, Layout, Button } from 'antd'
import Dimensions from 'react-dimensions';
import './index.scss';

const SubMenu = Menu.SubMenu
/**
 * @description     视频播放页面的导航
 * @author          Bin
 * @date            2018-12-11
 * @class           OnlineMovieNav
 * @extends         {React.Component}
 */

class OnlineMovieNav  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /* 注册按钮样式 */
        const reightBtnStyle = {
            marginLeft : this.props.containerWidth - 650
        };
        return (
            <div id = "onlineMovieNav"> 
                <Menu
                    className = "left_right"
                    mode = "horizontal" 
                >
                    <Menu.Item>向左</Menu.Item>
                    <Menu.Item><a href="#/home">1-1课程简介</a></Menu.Item>  
                    <Menu.Item> <a href="#/learn">*收藏</a> </Menu.Item> 
                    <Menu.Item style = {reightBtnStyle}><Button onClick = {this.register}>注册</Button></Menu.Item> 
                    <Menu.Item ><Button onClick = {this.register}>登录</Button></Menu.Item> 
                </Menu>
          </div>
        )
    }
}

export default (Dimensions({
    getHeight : function() {
        return window.innerHeight;
    },
    getWidth : function() {
        return window.innerWidth;
    }
})(OnlineMovieNav));