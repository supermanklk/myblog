import React from 'react';
import './index.scss';
import {Collapse} from 'antd';
const Panel = Collapse.Panel;
/**
 * @description 在线学习视频-课程详情
 * @author Bin
 * @date 2018-11-18
 * @class itemDetail
 * @extends {React.Component}
 */
class itemDetail extends React.Component {

    constructor(...props) {
        super(...props);
        this.state = {
            activeA : 1,    // 默认为课程章节
        }
    }
    
    componentDidMount() {
        // 根据courseId的参数来进行渲染这个页面
    //    console.log(this.props.query.courseId);
       console.log(this.props.location.query.courseId);
    }


    /**
     * @description     点击课程,问答,笔记,评价触发的函数
     * @author          Bin
     * @date            2018-11-29
     * @param {*}       num : 1,2,3,4 分别代表课程,问答,笔记,评价
     * @memberof        clickA
     */

    clickA(num) {
        this.setState({
            activeA : num,
        })
    }
 
	render() {
        const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        /* 课程,问答,笔记,评价是否被显示, 同时只能显示一个 */
        let displayLeft = null;
        switch (this.state.activeA) {
            case 1 : 
                displayLeft = (
                    <div className = 'left_div'>
                        <p className = 'box_style'>简介：LNMP通常是指Linux + Nginx + MySQL + PHP的简称。LNMP与LAMP相比，消耗资源更少，支持的并发连接，更高的效率，反向代理功能效率高、静态文件处理快等。本课程和您一起，手把手分别使用yum和源码安装配置LNMP环境，并部署常见的测试管理工具所需环境。</p>
                        <div className = 'box_style'>
                            <h4>第1章 课程介绍</h4>
                            <p>本章介绍本课程要点，学习的方式，最终的实践效果。</p>
                            <p>1-1. 课程介绍(01.35)</p>
                        </div>
                        <div className = 'box_style'>
                            <h4>第2章 LNMP初探</h4>
                            <p>本章介绍L、N、M、P是什么及为什么要使用LNMP。</p>
                            <p>2-1. 最近喜欢椰汁,椰树牌的,鲜榨30年,不用椰子香精当生榨骗人,您值得拥有.</p>
                        </div>
                    </div>
                );
                break;
            case 2 :
                displayLeft = (
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="超人 2018-8-9 男" key="1" style={customPanelStyle}>
                        <p>大家记得拿快递哦~~不一一at了空调我新风我都关了，如果晚上冷自己开的话，记得关闭</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 4" key="4" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 5" key="5" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 6" key="6" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 7" key="7" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 8" key="8" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 9" key="9" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 10" key="10" style={customPanelStyle}>
                        <p>{text}</p>
                        </Panel>
                    </Collapse> 
                );
                break;
            case 3 :
                displayLeft = '3333';
                break;
            case 4 :
                displayLeft = '4444';
                break;
            default:
                return;
        }
      
		return (
            <div className = 'itemDetail'>
                
                {/* header */}
                <div className = 'itemDetail_header'>
                    {/* 1200px */}
                    <div className = 'itemDetail_header_inner'>
                        <div className = 'top'>
                            <p>课程 \运维&测试 \测试 \基于LNMP的测试工具环境部署</p>
                            <p>收藏/微博/腾讯/QQ</p>
                        </div>
                        <h3 className = 'body'>基于LNMP的测试工具环境部署</h3>
                        <div className = 'bottom'>
                            <div className = 'bottom_left'>
                                <img className = 'img_author' src="http://supermanbin.oss-cn-beijing.aliyuncs.com/superman.png" alt=""/>
                                <p className = 'bottom_left_right'>
                                    <span>超人不会飞</span>
                                    <span className = 'what'>前端攻城狮</span>
                                </p>
                            </div>
                            <p className = 'bottom_right'>难度初级 时长 1小时56分 学习人数1025 综合评分10.0</p>
                        </div>
                    </div>
                </div>
                
                {/* header - 2 */}
                <div className = 'itemDetail_header_2'>
                    {/* 1200px */}
                    <div className = 'itemDetail_header_2_inner'>
                        {/* 封装成公共组建 */}
                        <a onClick = {() => {this.clickA(1)}}>课程章节</a>
                        <a onClick = {() => {this.clickA(2)}}>问答评价</a>
                        <a onClick = {() => {this.clickA(3)}}>同学笔记</a>
                        <a onClick = {() => {this.clickA(4)}}>用户评价</a>
                    </div>
                </div>
                
                {/* body 课程章节*/}
                <div className = 'itemDetail_body'>
                    {/* 1200px */}
                    <div className = 'itemDetail_body_inner'>
                        {/* left  800px */}

                        {/* 左边-课程章节 */}
                        {/* <div className = 'left'></div> */}


                        {/* 同学笔记 */}
                        {/* 这一块最多显示10条数据 */}
                        <div className = 'left'>
                            {displayLeft}
                        </div>


                        {/* right 400px */}
                        <div className = 'right'>
                            {/* top */}
                            <div className = 'right_wrap box_style'>
                                <h4 className = 'rewrite_h4'>开始学习</h4>
                                <h5 className = 'rewrite_h5'>课程须知</h5>
                                <p>1、了解Linux的常用命令</p>
                                <p>2、了解MySQL及PHP</p>
                                <h5 className = 'rewrite_h5'>课程须知</h5>
                                <p>1、LNMP是什么，以及应用场景</p>
                                <p>2、Linux简介，Linux网络配置、Linux光盘挂载，yum源配置，Linux常用命令</p>
                                <p>3、yum版的LNMP环境搭建</p>
                                <p>4、源码版的LNMP环境搭建</p>
                                <p>5、部署测试工具之TestLink环境</p>
                            </div>
                            {/* bottom */}
                            <div className = 'right_recommend'>
                                <h5 className = 'rewrite_h5'>推荐课程</h5>
                                <div className = 'right_recommend_item'>
                                    {/* img_style 这里的类是为了图片的动态效果服务的 */}
                                    <div className = 'img_style'>
                                        <img  className = 'img img_style_end' src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/moou.jpg" alt=""/>
                                    </div>
                                    <div className = 'p_style'>
                                        <span className = 'course_name'>安卓自动化测试入门</span>
                                        <span className = 'course_info'>$148.00 初级 11110</span>
                                    </div>
                                </div>
                                <div className = 'right_recommend_item'>
                                    <div className = 'img_style'>
                                        <img  className = 'img img_style_end' src="https://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/course_commend_3.jpg" alt=""/>
                                    </div>
                                    <div className = 'p_style'>
                                        <span className = 'course_name'>Android自动化测试实战 Java篇</span>
                                        <span className = 'course_info'>$179.00 初级 11110</span>
                                    </div>
                                </div>
                                <div className = 'right_recommend_item'>
                                    <div className = 'img_style'>
                                        <img  className = 'img img_style_end' src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1/course_commend_2.jpg" alt=""/>
                                    </div>
                                    <div className = 'p_style'>
                                        <span className = 'course_name'>Python移动自动化测试面试</span>
                                        <span className = 'course_info'>$299.00 初级 11110</span>
                                    </div>
                                </div>
                                <h5 className = 'rewrite_h5'>热门专题标签</h5>
                                <h5 className = 'rewrite_h5'>相关课程</h5>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
		) 
	} 
}




// const mapStateToProps = (state) => ({
// 	state: state.SmallToolsReducer
// })
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({},dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Learn);

export default itemDetail;