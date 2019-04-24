import React from 'react';
import { Menu, Icon, Layout, Button } from 'antd'
import Dimensions from 'react-dimensions';
import './index.scss';
import { timingSafeEqual } from 'crypto';

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
        this.state = {
            title: {
                chapter : '正在加载哦...'
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('查看props',nextProps);
        if(nextProps.title) {
            console.log('查看props');
            this.setState({
                title : nextProps.title
            })
        }
    }

    // 其实是返回上一步
    goLeft() {
        // 以下是返回上一步,消息还会保存 但是使用history.back(-1) 就是打开一个全新的页面
        window.history.go(-1);
    }

    userout = () => {
        sessionStorage.clear();
    }

    render() {
        /* 注册按钮样式 */
        const reightBtnStyle = {
            marginLeft : this.props.containerWidth - 650
        };
        console.log(this.props);
        return (
            <div id = "onlineMovieNav"> 
                <Menu
                    className = "left_right"
                    mode = "horizontal" 
                >
                    <Menu.Item onClick = {this.goLeft}>返回</Menu.Item>
                    <Menu.Item><a href="#/home">{this.state.title.chapter}</a></Menu.Item>  
                    <Menu.Item> <a href="#/learn">*收藏</a> </Menu.Item> 
                    <Menu.Item style = {reightBtnStyle}><Button onClick = {this.register}>注册</Button></Menu.Item> 
                    {/* <Menu.Item ><Button onClick = {this.register}>登录</Button></Menu.Item>  */}
                    <Menu.Item ><Button onClick = {this.userout}>退出</Button></Menu.Item> 
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