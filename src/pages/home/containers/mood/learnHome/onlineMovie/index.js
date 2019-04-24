import React from 'react';
import {Icon, Drawer, Radio} from 'antd';
import Course from '../../../../../../components/course/index';
import Dimensions from 'react-dimensions';
import { api } from 'util/index';
import OnlineMovieNav from '../onlineMovieNav/index';
import './index.scss';

const RadioGroup = Radio.Group;

/**
 * @description     视频播放页,通过点击视频列表进来的.
 * @author          Bin
 * @date            2018-12-02
 * @class           OnlineMovie
 * @extends         {React.Component}
 */

class OnlineMovie extends React.Component {
	constructor(...props) {
		super(...props);
		this.state = {
			visible: false, 
			placement: 'bottom',
			movieData : {
				movie_address : ''
			}
		}
	} 

	

	/* 进这个页面以后,需要将页面的颜色改为#181A1B */
	componentDidMount() {
		console.log(111,document.getElementById("home_nav"));
		let element = document.getElementById("home_nav");
		if(element) {
			element.style.display = 'none';
		}

		// 接受参数
		var data = this.props.location.query;
		console.log('查看要播放那个视频',data.id); // data 就是graduation_course内的id字段
		// 开始请求视频资源
		api({
			url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationCourse/getCourseInfo?id=${data.id}`,
			callback: (rsp) => {
				console.log('查看将要播放课程的详细信息',rsp[0]);
				this.setState({
					movieData : rsp[0]
				})
			}
		});
	}

	showDrawer = () => {
		this.setState({
		  visible: true,
		});
	};
	
	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	onChange = (e) => {
		this.setState({
			placement: e.target.value,
		});
	}

	goleft = () => {
		// 返回上一层 因为上一层有问答 评论
		window.history.go(-1);
	}


    render() {
		return ( 
			<div className = "onlineMovie_wrap">
				
				{/* 播放视频导航 */}
				<OnlineMovieNav title = {this.state.movieData}/>

				{/* 播放视频块 */}	
				<div className = "onlineMovie">
					
					{/* 播放页-左边导航 */}
					<div className = "left">
						<dl>
							<dd onClick = {this.showDrawer}><Icon type="hdd" theme="filled" /><br/>章节</dd>
							<br/>
							<dd onClick = {this.goleft} ><Icon type="question-circle" theme="filled" /><br/>问答</dd>
							<br/>
							<dd onClick = {this.goleft} ><Icon type="edit" theme="filled" /><br/>笔记</dd>
							<br/>
							<dd onClick = {this.goleft} ><Icon type="message" theme="filled" /><br/>评论</dd>
						</dl>
					</div>

					{/* 播放页-播放区 */}
					<div className = "center" >
						<Drawer
							// 修改antd的原生样式 
							className = "coverAntdStyle"
							title		=	"章节目录"
							placement	=	{this.state.placement}
							closable	=	{true}
							onClose		=	{this.onClose}
							visible		=	{this.state.visible}
							// style 		=	{{background : 'red'}}
							height		=	{300}
							>
							<p>1-1课程导学...</p>
							<p>1-2什么是服务器端渲染...</p>
							<p>1-3什么是客户端渲染...</p>
							<p>1-4React 客户端渲染的优势与弊端...</p>
							<p>2-1 在服务器端编写 React 组件</p>
							<p>2-2 服务器端 Webpack 的配置</p>
							<p>2-3 实现服务器端组件渲染</p>
							<p>2-4 建立在虚拟DOM上的服务器端渲染</p>
							<p>2-5 Webpack 的自动打包与服务器自动重启</p>
							<p>2-6 使用 npm-run-all 提升开发效率</p>
							<p>3-1 什么是同构</p>
							<p>3-2 在浏览器上执行一段 JS 代码</p>
							<p>3-3 让 React 代码在浏览器上运行</p>
							<p>3-4 工程代码优化整理</p>
							<p>3-5 阶段总结</p>
							<p>4-1 服务器端渲染中的路由</p>
							<p>4-2 多页面路由跳转</p>
						</Drawer>
						<video style = {{width : '100%'}} id="video-box-mocoplayer-hls-video_html5_api"  controls preload="auto"  src={this.state.movieData['movie_address']}> </video>
					</div>

					{/* 播放页-介绍 */}
					<div className = "right">
						<div className = "authorInfo">
							{/* 包含坐着的头像, 笔名, 职业 */}
							<div className = "top">
								<img className = "top_left" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/superman.png" alt=""/>
								<p className ="top_right">
									<span className = "name">Supermanbin</span>
									<span className = "position">Web前端工程师</span>
								</p>
							</div>

							{/* 作者的简介 */}
							<p className = "introduction">
							BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！
							</p>
						</div>
					</div>
				</div>
				
				{/* 课程说明 */}
				<div>
					<Course/>
				</div>	
			</div>	
		)
	}
} 


export default (Dimensions({
	getHeight : function() {
		return window.innerHeight;
	},
	geiWidth : function() {
		return window.innerWidth;
	}
})(OnlineMovie));