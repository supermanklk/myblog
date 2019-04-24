import React from 'react';
import { hashHistory } from 'react-router'
import { api } from 'util/index';
import { Modal, Button } from 'antd';
import './index.scss';

/**
 * @description     该组件是课程章节下的具体视频列表,点击列表内的课程就会进入对应的视频播放页
 *                  该组件需要获取课程的id
 * @author          Bin
 * @date            2018-11-30
 * @class           ItemMovieList
 * @extends         {React.Component}
 */
class ItemMovieList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            maindata : {
                detail_direction : '',
            },
            chapter_num1 : [],
            chapter_num2 : [],
            chapter_num3 : [],
            data : null,
            userInfo : null , // 用户的详细信息
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('更新22',nextProps);
        let maindata = null;
        let chapter_num1 = [];
        let chapter_num2 = [];
        let chapter_num3 = [];
        if(nextProps.data) {
            
            nextProps.data.forEach(element => {
                if(element['is_main'] == 1) {
                    maindata = element;
                } else {
                    if(element['chapter_num'] == 1) {
                        chapter_num1.push(element); // 第一章节
                    } else if(element['chapter_num'] == 2) {
                        chapter_num2.push(element); // 第二章节
                    } else if (element['chapter_num'] == 3) {
                        chapter_num3.push(element); // 第三章节
                    }
                }
            });
            this.setState({
                maindata : maindata,
                chapter_num1,
                chapter_num2,
                chapter_num3
            })
        }

        console.log('获取item的数据',nextProps);
      }
    
    clickMovieItem = (id) => {
        // id 对应的就是graduation_course表的id字段
        // 点击的时候,首先判断这个课程是否收费,如果时候要查看这个用户是否支付
        console.log(this.state.maindata);
        if(this.state.maindata['price'] > 0 ) {
            // 说明收费
            // 然后查看个人的用户信息是否购买了该课程,如果购买直接跳转,否则则开始支付
            // 从缓存中获取缓存信息
            let user =  sessionStorage.getItem("userLogin");
            if(user) {
                // 请求用户信息
                api({
                    url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationUser/getUser?phone=${user}`,
                    callback: (rsp) => {
                        console.log('用户点击了观看,查看该用户信息,是否购买了改课程',rsp.data[0]);
                        // 查看用户下购买的课程含有该课程没有
                        let userInfo = rsp.data[0];
                        try {
                            if(userInfo['hava_pay_id'].includes(this.state.maindata['courseID']) == true) {
                                // 说明用户已经购买,可以直接看
                                Modal.success({
                                    title: '欢迎',
                                    content: '欢迎你继续回来观看',
                                });
                                hashHistory.push({
                                    pathname: '/onlineMovie',
                                    query   : {
                                        id // 将id数据传递,在播放视频页面会加载对应的视频
                                    }
                                });
                            } else {
                                // 微信支付这一块已经做过
                                Modal.warning({
                                    title: '提示',
                                    content: '你还没购买课程,请先购买课程',
                                  });
                            }
                        } catch (error) {
                             // 微信支付这一块已经做过
                             Modal.warning({
                                title: '提示',
                                content: '你还没购买课程,请先购买课程',
                              });
                        }
                     
                        this.setState({
                            userInfo : rsp.data[0]
                        })
                    }
                });
            }
        } else {
            hashHistory.push({
                pathname: '/onlineMovie',
                query   : {
                    id : '777'
                }
            });
        }
      
    }
    render() {
        return (
            <div>
                {/* <p className = 'box_style'>简介：LNMP通常是指Linux + Nginx + MySQL + PHP的简称。LNMP与LAMP相比，消耗资源更少，支持的并发连接，更高的效率，反向代理功能效率高、静态文件处理快等。本课程和您一起，手把手分别使用yum和源码安装配置LNMP环境，并部署常见的测试管理工具所需环境。</p> */}
                <p className = 'box_style'>{this.state.maindata['detail_direction']}</p>
                {/* 视频列表 */}
                <div className = 'box_style'>
                   
                    <h4>第1章 课程介绍</h4>
                    <p>本章介绍本课程要点，学习的方式，最终的实践效果。</p>
                    {
                        this.state.chapter_num1.map((item,index) => {
                            return (
                                <p className = "box_style_list" key={index} onClick = {() => { this.clickMovieItem(item['id'])}}>
                                    <div>
                                        <img className = "img_icon" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/icon/start_gray.png" alt=""/>
                                        <span>{item['chapter']}</span>
                                    </div>
                                    <span className = "btn_start_learn">开始学习</span>
                                </p>
                            )
                        })
                    }
                </div>

                <div className = 'box_style'>
                    <h4>第2章 LNMP初探</h4>
                    <p>本章介绍L、N、M、P是什么及为什么要使用LNMP。</p>
                    {/* <p className = "box_style_list">
                        <div>
                            <img className = "img_icon" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/icon/start_gray.png" alt=""/>
                            <span> 2-1. 最近喜欢椰汁,椰树牌的,鲜榨30年,不用椰子香精当生榨骗人,您值得拥有.</span>
                        </div>
                        <span className = "btn_start_learn">开始学习</span>
                    </p> */}
                    {
                        this.state.chapter_num2.map((item,index) => {
                            return (
                                // item的id对应的是graduation_course内的id 直接获取要播放那个课程的信息
                                <p className = "box_style_list" key={index} onClick = {() => { this.clickMovieItem(item['id'])}}>
                                    <div>
                                        <img className = "img_icon" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/icon/start_gray.png" alt=""/>
                                        <span>{item['chapter']}</span>
                                    </div>
                                    <span className = "btn_start_learn">开始学习</span>
                                </p>
                            )
                        })
                    }

                </div>

                <div className = 'box_style'>
                    <h4>第3章 LNMP初探</h4>
                    <p>本章介绍L、N、M、P是什么及为什么要使用LNMP。</p>
                    {/* <p className = "box_style_list">
                        <div>
                            <img className = "img_icon" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/icon/start_gray.png" alt=""/>
                            <span> 2-1. 最近喜欢椰汁,椰树牌的,鲜榨30年,不用椰子香精当生榨骗人,您值得拥有.</span>
                        </div>
                        <span className = "btn_start_learn">开始学习</span>
                    </p> */}
                    {
                        this.state.chapter_num3.map((item, idnex) => {
                            return (
                                <p className = "box_style_list" key={idnex} onClick = {() => { this.clickMovieItem(item['id'])}}>
                                    <div>
                                        <img className = "img_icon" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/icon/start_gray.png" alt=""/>
                                        <span>{item['chapter']}</span>
                                    </div>
                                    <span className = "btn_start_learn">开始学习</span>
                                </p>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}


export default ItemMovieList;