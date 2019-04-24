import React from 'react';
import './index.scss';
import ItemMovieList from './itemMovieList/index'; // 课程章节 >> 具体的视频列表组件
import {Collapse, List, Avatar} from 'antd';
import { api } from 'util/index';
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
            data : null,
            nodeData : [],// 课程的笔记
            evaluationData : [], // 课程评价的数据
        }
    }
    
    componentDidMount() {
        // 根据courseId的参数来进行渲染这个页面
        //console.log(this.props.query.courseId);
        console.log(this.props.location.query.courseId);
        api({
            url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1/movie/${this.props.location.query.courseId}`,
            callback: (rsp) => {
                console.log('查看list1返回的数据',rsp);
                this.setState({
                    data : rsp
                })
            }
        });

        // 请求课程笔记
        api({
            url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationNote/getInfobyId?courseID=${this.props.location.query.courseId}`,
            callback: (rsp) => {
                console.log('查看该课程的笔记',rsp);
                this.setState({
                    nodeData : rsp
                })
            }
        });

        // 请求课程的评价
        api({
            url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationEvaluation/getInfobyId?courseID=${this.props.location.query.courseId}`,
            callback: (rsp) => {
                console.log('查看该课程的评价',rsp);
                this.setState({
                    evaluationData : rsp
                })
            }
        });
        
    }


    /**
     * @description     点击学习去看视频,视频有免费的与收费的
     * @author          Bin
     * @date            2018-11-29
     * @memberof        clickA
     */
    goToStudy(){
        console.log('点击了开始学习');
    }


    /**
     * @description     点击课程,问答,笔记,评价触发的函数
     * @author          Bin
     * @date            2018-11-29
     * @param {*}       num : 1,2,3,4 分别代表课程,问答,笔记,评价
     * @memberof        clickA
     */

    clickA(num) {
        console.log(this.state);
        if(num != this.state.activeA) {
            /* 此刻按钮颜色是num这个 */
            switch (num){
                case 1 :
                    this.a1.style.color = '#EE0D12';
                    break;
                case 3 :
                    this.a3.style.color = '#EE0D12';
                    break;
                case 4 :
                    this.a4.style.color = '#EE0D12';
                    break;
                default :
                    break;
            } 
            if(this.state.activeA == 1) this.a1.style.color = '';
            if(this.state.activeA == 3) this.a3.style.color = '';
            if(this.state.activeA == 4) this.a4.style.color = '';
        }
        this.setState({
            activeA : num,
        })
    }
 
	render() {
        console.log('render');
        /* 用户评价内容 */
        const data = [
            {
                title: '佩奇一号',
                description : '怒抢沙发，老师讲的实在是太棒了，本人在深度学习领域，学习研究了快两年了，以前一些自认为很熟悉了解透的东西，通过老师的讲解我才发现以前的自己有多么的无知。不愧是google的人，真的佩服。老师加油出，敢出就敢买。'
            },
            {
                title: '佩奇二号',
                description : '额…… 偏向实战，一行行敲代码解释代码。适合看了不少书却几乎没有敲过神经网络代码的人购买。'
            },
            {
                title: '你信不信我捶你?',
                description : '讲的非常好，内容偏向实战，老师代码水平也很高，是我听过的最好的一套深度学习的课程，感觉自己买赚了。很期待老师后续再多出一些深度学习的课程'
            },
            {
                title: '日本北海道',
                description : '老师确实很厉害，能看出来几乎不用照着什么东西写的，都是现场debug。代码能力很强，学习！。'
            },
            {
                title: '东方明珠哦',
                description : '老师把很多基础概念讲的非常清晰明白，我感到受益匪浅。以前的课都是上来就讲结果，不晓得为什么会这样，现在感觉思路清晰多了！'
            },
            {
                title: 'hello莫妮卡',
                description : '老师水平是相当高的！只是发音清楚一点就好了哈哈哈'
            },
            {
                title: '嘿嘿',
                description : '老师讲的比我上次买的另一个老师的讲得好，很细致。'
            },
            {
                title: '哈哈哈啊了',
                description : ' 就是有一天 当你再次面对你过往的难堪 你憎恨恼怒的人 心如止水 不再起心动念 坦然面对 一笑了之 即便别人在你面前 复述你过往种种不幸时 你仿佛是在听别人的故事 当你真正放下的时候 心里一丝涟漪都没有了 放下 莫过如此.'
            },
            
        ];

        const note = this.state.nodeData;
        console.log('note',note);

        /* 同学笔记内容 */
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
        var displayLeft = null;
        switch (this.state.activeA) {
            case 1 : 
                displayLeft = (
                    /* 课程章节 >> 具体的视频列表组件 */
                    <div className = 'left_div'>
                        <ItemMovieList data = {this.state.data}/>
                    </div>
                );
                break;
            case 3 :
                console.log(3);
                displayLeft = (
                    <Collapse bordered={false} defaultActiveKey={['0']}>
                        {
                            note.map((item, index) => {
                                return (
                                    <Panel header={ item['time']} key={index} style={customPanelStyle}>
                                        <p>{item['note']}</p>
                                    </Panel>
                                )
                            })
                        }
                    </Collapse> 
                );
                break;
            case 2 :
            console.log(2);
                displayLeft = '3333';
                break;
            case 4 :
            console.log(4);
                displayLeft = (
                    <List
                    itemLayout="horizontal"
                    dataSource={this.state.evaluationData}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="#">{item.time}</a>}
                        description = {item.evaluation}
                        />
                    </List.Item>
                    )}
                    />
                );
                break;
            default:
            console.log(6);
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
                        <span ref = {node => this.a1 = node} onClick = {() => {this.clickA(1)}} style = {{color : '#EE0D12'}}>课程章节</span>
                        {/* <a onClick = {() => {this.clickA(2)}}>问答评价</a> */}
                        <span href = "#" ref = {node => this.a3 = node} onClick = {() => {this.clickA(3)}}>同学笔记</span>
                        <span href = "#" ref = {node => this.a4 = node} onClick = {() => {this.clickA(4)}}>用户评价</span>
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
                                <h4 onClick =  {this.goToStudy} className = 'rewrite_h4'>开始学习</h4>
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