import React from 'react'
import './index.scss'
import { Input, message, Modal, List, Typography, Button } from 'antd';
import TitleH3 from 'components/titleH3/index';
import { hashHistory } from 'react-router';
import MainItem from './mainItem/index';
const Search = Input.Search;
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            havaSearch : [], // 已经查询到的课程
            noteArr1 : [
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门 想，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                }
            ],
            noteArr2 : [
                { 
                    name : '【前端学习路线2019版】看新手如何系统掌握前端技能',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '前端要不要学数据结构&算法',
                    content : '我们都知道前端开发工程师更多偏向 DOM 渲染和 DOM 交互操作，随之 Node 的推广前端工程师也可以完成服务端开发。对于服务端开发而言大家都觉得数据结构和算法是基础，非学不可。所以正在进行 Node 开发的同学而言，这个答案跃然纸上。我们今天重点说一说纯前端开发的同学到底需不要数据结构与算法。我先说下结论：需要，非常需要。第一，只要是程序员，基本功都是数据结构与算法  &...',
                    lookNumber : 4545,
                    recommendNumber : 787
                },
                { 
                    name : '电商项目部署日记',
                    content : '这篇日记就一个目的，记录一下部署的过程，以供大家参考 手记主要是准备分享数据库和负载均衡的部署内容，同时会给一个参考的跨域解决方案。 前置准备： 仿猫眼后端项目开发完成 获取仿猫眼前端工程 CentOS主机 温馨提示： 仿猫眼项目并非必须，只要是前后端分离项目即可参考本章 CentOS主机最好有一个公网IP，如果没有，可以将章节内的IP地址【域名】换成内网地址【hostname】 这里不会普及基础...',
                    lookNumber : 3542,
                    recommendNumber : 55
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                }
            ],
            noteArr3 : [
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前前端的小伙伴们，那就放马过来吧！ 首先，给能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                },
                { 
                    name : '【干货推荐】java工程师从零进阶，大牛带你轻松上路',
                    content : '前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
                    lookNumber : 13162,
                    recommendNumber : 788
                }
            ],
            itemArr : [
                {
                    title : 'Spring Boot 2.0深度实践之系列总览',
                    img_url : 'https://img.mukewang.com/5bbafd180001688d06000338-240-135.jpg',
                    level : '3',
                    peopleNumber : '17396',
                    money : '0',
                    oldMoney : '0',
                    isDiscount : false
                },
                {
                    title : 'Python3入门机器学习 经典算法与应用',
                    img_url : 'https://img3.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg',
                    level : '2',
                    peopleNumber : '2504',
                    money : '499',
                    oldMoney : '499',
                    isDiscount : true
                },
                {
                    title : '解锁网络编程之NIO的前世今生',
                    img_url : 'https://img.mukewang.com/5cb6ec65083b996306000338-240-135.jpg',
                    level : '1',
                    peopleNumber : '1832',
                    money : '0',
                    oldMoney : '0',
                    isDiscount : false
                },
                {
                    title : '从零做一个前端开源项目',
                    img_url : 'https://img3.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg',
                    level : '3',
                    peopleNumber : '34456',
                    money : '0',
                    oldMoney : '0',
                    isDiscount : false
                },
                {
                    title : 'React16.8+Next.js+Koa2开发Github全栈项目',
                    img_url : 'https://img2.mukewang.com/szimg/5cb3e0c7087bb92206000338.jpg',
                    level : '3',
                    peopleNumber : '91',
                    money : '399',
                    oldMoney : '399',
                    isDiscount : true
                },
                {
                    title : '解锁网络编程之NIO的前世今生',
                    img_url : 'https://img.mukewang.com/5cb6ec65083b996306000338-240-135.jpg',
                    level : '1',
                    peopleNumber : '1832',
                    money : '0',
                    oldMoney : '0',
                    isDiscount : false
                },

            ]
        }
    }


    // 搜索课程的弹窗
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

    handleCancel = (e) => {
    console.log(e);
    this.setState({
        visible: false,
    });
    } 
    // 搜索课程的弹窗


    // 通过搜索以后去对应的课程
    gotoCourseItem = (index) => {
        // index是第几个课程的下表 在 havaSearch 内
        hashHistory.push({
            pathname : '/mood'
        })
    }


    onSearch = (value) => {
        let havaSearch = []; // 查询到的课程
        let courseArr = [
            'React服务器渲染原理解析与实践',
            '新版React Native+Redux打造高质量上线App',
            'Tornado从入门到进阶 打造支持高并发的技术论坛'
        ];
        for (const iterator of courseArr) {
            if(iterator.includes(value)) {
                // 如果查询的关键词包含在课程数组内,则放到 havaSearch 里面.
                havaSearch.push(iterator);
            }
        }
        // 如果havaSearch不为空,说明查到到课程了. 它的长度(length)代表找到了几个课程
        if(havaSearch.length != 0) {
            // 弹窗 
            this.setState({
                visible : true,
                havaSearch
            });

        } else {
            message.warning('没有你寻找对应的课程,请重试');
        }
    }

    render() {
        const contentNote1 = this.state.noteArr1.map((item,index) => {
            return (
                <div key = {index}>
                    <p className = "p1">手记文章</p>
                    <p className = "p2">{item.name}</p>
                    <p className = "p3">{item.content}</p>
                    <p className = "p4">
                        <span>浏览</span>
                        <span>{item.lookNumber}</span>
                        &nbsp; &nbsp;
                        <span>推荐&nbsp;{item.recommendNumber}</span>
                    </p>
                </div>
            )
        });
        const contentNote2 = this.state.noteArr2.map((item,index) => {
            return (
                <div key = {index}>
                    <p className = "p1">手记文章</p>
                    <p className = "p2">{item.name}</p>
                    <p className = "p3">{item.content}</p>
                    <p className = "p4">
                        <span>浏览</span>
                        <span>{item.lookNumber}</span>
                        &nbsp; &nbsp;
                        <span>推荐&nbsp;{item.recommendNumber}</span>
                    </p>
                </div>
            )
        });
        const contentNote3 = this.state.noteArr3.map((item,index) => {
            return (
                <div key = {index}>
                    <p className = "p1">手记文章</p>
                    <p className = "p2">{item.name}</p>
                    <p className = "p3">{item.content}</p>
                    <p className = "p4">
                        <span>浏览</span>
                        <span>{item.lookNumber}</span>
                        &nbsp; &nbsp;
                        <span>推荐&nbsp;{item.recommendNumber}</span>
                    </p>
                </div>
            )
        });
        const mainItemArr1 = this.state.itemArr.map((item, index) => {
            if(index <= 4) {
                return (
                    <MainItem data = {item} key = {index}/>
                )
            }
        });
        return (
            <div className = "main_item">  

                {/* 弹窗-搜索到课程了的弹窗 */}
                <Modal
                className = "searchModal"
                title="以下是搜索到的课程"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <List
                className = "searchModal_item"
                bordered
                dataSource={this.state.havaSearch}
                renderItem={(item,index) => (<List.Item> {item} <Button onClick = {(index) => {this.gotoCourseItem(index)} }>前去课程详细</Button> </List.Item>)}
                />
                </Modal>

                <div className="main_item_search">
                    <Search
                    placeholder="请输入课程名称"
                    onSearch={(value) => {this.onSearch(value)} }
                    style={{ width: 200 }}
                    />
                </div>
                
                <br /><br />
                {/* div的宽度为960px */}
                <div className = "div_960">
                    {/* 第一部分 */}
                    <div>
                        {/* 暂看写什么 */}
                    </div>
                    
                    {/* 第二部分 */}
                    <div>
                        {/* 留言吧 */}
                    </div>
                    
                    <TitleH3 title="技能提升"/>
                    {/* 新手入门 */}
                    <div className = "div_left_right">
                        <div className = "div_img">
                            <img src="https://zhushangkeji.oss-cn-hangzhou.aliyuncs.com/img/biye_3.jpg" alt=""/>
                        </div>
                        <div className = "div_img">
                            <img src="https://zhushangkeji.oss-cn-hangzhou.aliyuncs.com/img/biye_2.jpg" alt=""/>
                        </div>
                    </div>


                    <div className = "div_left_right">
                        {/* <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/> */}
                        {mainItemArr1}
                    </div>

                    <div className = "div_left_right">
                        {/* <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/> */}
                        {mainItemArr1}
                    </div>
                   

                    <TitleH3 title="前言技术"/>
                    <div className = "div_left_right">
                        {/* <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/> */}
                        {mainItemArr1}
                    </div>
                    <div className = "div_left_right">
                       {/* <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/>
                        <MainItem/> */}
                        {mainItemArr1}
                    </div>


                    <TitleH3 title="精彩手记及猿问"/>
                    <div className = "div_left_right_note">
                        <div className = "div_left_right_note_div div_left_right_note_left">
                            {/* <div>
                                <p className = "p1">手记文章</p>
                                <p className = "p2">【干货推荐】java工程师从零进阶，大牛带你轻松上路</p>
                                <p className = "p3">前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！ 首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下 根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...</p>
                                <p className = "p4">
                                    <span>浏览</span>
                                    <span>13162</span>
                                    &nbsp; &nbsp;
                                    <span>推荐&nbsp;105</span>
                                </p>
                            </div>
                            <div>
                                面试是程序员求职过程中最重要的一步 别以为面试技巧很虚 很多技术不错的人 恰恰输在了面试技巧上 知识点怎么复习、问题如何回答 怎么在面试时避免采坑、惊艳面试官 怎么与HR谈论薪资待遇…… 往往这些问题决定你能否成功应聘。 敲黑板划重点： 以下面试技巧神器你值得拥有！备战金三银四，涨薪先人一步，还等什么，快点mark起来吧~ 大量干货文章袭来预警~ 一、通用篇 干货文章：...
                            </div>
                            <div>
                                java新手不知如何入门？ 经验多却面临上升瓶颈期？ 想进阶高级工程师还差点火候？ 今天这波最实用的java实战之路 以战养兵 为你打通职业发展脉络 沿着Java大牛们的思路， 逐步成长为一名业务与思想同样优秀的Java开发者。 就业、晋升、管理均游刃有余！ 不多说了，上干货！ 阅读指南：本文专为Java开发行业人员设计，分为四个阶段，循序渐进的带你进行SSM框架、SpringBoot框架、微服务...
                            </div>
                            <div>
                                234567
                            </div> */}
                            {contentNote1}
                        </div>
                        <div className = "div_left_right_note_div div_left_right_note_center">
                            {contentNote2}
                        </div>
                        <div className = "div_left_right_note_div div_left_right_note_right">
                            {contentNote3}
                        </div>
                    </div>
                </div>  

                {/* header */}

            </div>
        )
    }

}


export default Main;