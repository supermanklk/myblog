import React from 'react';
import './index.scss';

/**
 * @description 在线学习视频-课程详情
 * @author Bin
 * @date 2018-11-18
 * @class itemDetail
 * @extends {React.Component}
 */
class itemDetail extends React.Component {
    
    componentDidMount() {
        // 根据courseId的参数来进行渲染这个页面
    //    console.log(this.props.query.courseId);
       console.log(this.props.location.query.courseId);
    }

 
	render() {
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
                        <a>课程章节</a>
                        <a>问答评价</a>
                        <a>同学笔记</a>
                        <a>用户评价</a>
                    </div>
                </div>
                
                {/* body 课程章节*/}
                <div className = 'itemDetail_body'>
                    {/* 1200px */}
                    <div className = 'itemDetail_body_inner'>
                        {/* left  800px */}

                        {/* 左边-课程章节 */}
                        <div className = 'left'>
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
                        </div>

                        {/* 左边-同学笔记 */}
                        {/* <div className = 'left'>
                            <div className = 'left_div'>
                                111
                            </div>
                        </div> */}

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