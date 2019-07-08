import React from 'react';
import {Icon, Drawer, Radio, Modal, Input, Button, Tooltip, Tag, message} from 'antd';
import Course from '../../../../../../components/course/index';
import Dimensions from 'react-dimensions';
import { api } from 'util/index';
import OnlineMovieNav from '../onlineMovieNav/index';
import './index.scss';
const confirm = Modal.confirm;
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
			visible1 : false,
			placement: 'bottom',
			movieData : {
				movie_address : ''
			},
			number : '', // 那个习题的下标
			
		}
		this.content = '1+1等于几?',
		this.answer = '';
		this.randomContent = [
			{
				quest : '调用 setState 之后发生了什么?',
				answer : '在代码中调用 setState 函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。'
			},
			{
				quest : 'react 生命周期函数',
				answer : '初始化阶段,运行中状态,销毁阶段'
			},
			{
				quest : 'shouldComponentUpdate是做什么的,（react 性能优化是哪个周期函数？',
				answer : 'shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。'
			},
			{
				quest : '为什么虚拟 dom 会提高性能?(必考)',
				answer : '虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。'
			},
			{
				quest : 'react diff 原理',
				answer : '把树形结构按照层级分解，只比较同级元素。'
			},
			{
				quest : '何为高阶组件(higher order component)',
				answer : '高阶组件是一个以组件为参数并返回一个新组件的函数。HOC 运行你重用代码、逻辑和引导抽象。最常见的可能是 Redux 的 connect 函数。除了简单分享工具库和简单的组合，HOC 最好的方式是共享 React 组件之间的行为。如果你发现你在不同的地方写了大量代码来做同一件事时，就应该考虑将代码重构为可重用的 HOC。'
			},
			{
				quest : '应该在 React 组件的何处发起 Ajax 请求',
				answer : '在 React 组件中，应该在 componentDidMount 中发起网络请求。这个方法会在组件第一次“挂载”(被添加到 DOM)时执行，在组件的生命周期中仅会执行一次。更重要的是，你不能保证在组件挂载之前 Ajax 请求已经完成，如果是这样，也就意味着你将尝试在一个未挂载的组件上调用 setState，这将不起作用。在 componentDidMount 中发起网络请求将保证这有一个组件可以更新了。'
			}
		]
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



		// 监听播放事件
		this.setIntervalTime();

	}

	// 收藏习题
	collectionExercises = ()=> {
		// 发送请求去存储
		// 获取习题
		let { number } = this.state;
		let quest = this.randomContent[number]['quest'];
		let answer = this.randomContent[number]['answer'];
		let json = {
			quest,
			answer
		};
		
		let phone = sessionStorage.getItem('userLogin');
		api({
			url: `http://bin.mynatapp.cc/GP_MOVIE/public/index.php/api/v1.Graduation_User/getUser?phone=${phone}`,
			callback: (rsp) => {
				// let arr = [];
				// arr.push(json);
				// let data = JSON.stringify(arr);
				// console.log(data);
				// console.log(909090);
				let data;
				let binbin = rsp.data[0]['collection_exercises'];
				console.log(binbin);
				console.log(87878);
				let arr = [];
				if(!binbin) {
					arr.push(json);
					data = arr;
				} else {
					let collection_exercises = JSON.parse(binbin);
					collection_exercises.push(json);
					data = collection_exercises;
				}
				api({
					url: `http://bin.mynatapp.cc/GP_MOVIE/public/index.php/api/v1.Graduation_User/collectionExercises?phone=${phone}&collection_exercises=${JSON.stringify(data)}`,
					callback: (rsp) => {
						console.log(rsp);
					}
				});
			}
		});
		message.success('习题收藏成功');
		var oMedia=document.getElementById("video-box-mocoplayer-hls-video_html5_api");
		oMedia.play();
		this.setIntervalTime();
	}


	setIntervalTime = () => {
		let number = Math.floor(Math.random()*3);
		this.setState({ number });
		let self = this;
		var oMedia=document.getElementById("video-box-mocoplayer-hls-video_html5_api");
		let timer = setInterval(() => {
			console.log(oMedia.currentTime);
			let time = oMedia.currentTime;
			// 一个视频弹2个习题
			// 第一个时间在5秒的地方
			if(time > 4 && time < 5) {
				oMedia.pause();
				clearInterval(timer);
				confirm({
					title: '习题',
					cancelText: '收藏习题',
					width : '500',
					content:  (
						<div>
							<Tag color="#108ee9">{this.randomContent[number]['quest']}</Tag>
							<Tooltip title={this.randomContent[number]['answer']}>
								<span>触及查看答案</span>
							</Tooltip>
						</div>
					),
					onOk() {
						oMedia.play();
						self.setIntervalTime();
						console.log('OK');
					},
					onCancel() {
						// 发送请求,在用户下面存储该习题信息.
						self.collectionExercises();
					},
				});
			}
			if(time > 10 && time < 11) {
				oMedia.pause();
				clearInterval(timer);
				confirm({
					title: '习题',
					cancelText: '收藏习题',
					content: (
						<div>
							{/* <Input placeholder="Basic usage"/>						 */}
							<Tag color="#108ee9">{this.randomContent[number]['quest']}</Tag>
							<Tooltip title={this.randomContent[number]['answer']}>
								<span>触及查看答案</span>
							</Tooltip>
						</div>
					),
					onOk() {
						oMedia.play();
						self.setIntervalTime();
						console.log('OK');
					},
					onCancel() {
							// 发送请求,在用户下面存储该习题信息.
							self.collectionExercises();
						console.log('Cancel');
					},
				});
			}
			if(time > 15 && time < 16) {
				oMedia.pause();
				clearInterval(timer);
				confirm({
					title: '习题',
					cancelText: '收藏习题',
					content:  (
						<div>
							<Tag color="#108ee9">{this.randomContent[number]['quest']}</Tag>
							<Tooltip title={this.randomContent[number]['answer']}>
								<span>触及查看答案</span>
							</Tooltip>
						</div>
					),
					onOk() {
						oMedia.play();
						self.setIntervalTime();
						console.log('OK');
					},
					onCancel() {
							// 发送请求,在用户下面存储该习题信息.
							self.collectionExercises();
					},
				});
			}
		},1000);
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

	showModal = () => {
    this.setState({
      visible1: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
		});
		window.history.go(-1);
		
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

	goleft = () => {
		// 返回上一层 因为上一层有问答 评论
		this.setState({
      visible1: true,
    });
		// window.history.go(-1);
	}


    render() {
		return ( 
			<div className = "onlineMovie_wrap">
				<Modal
					title="温馨提示"
					visible={this.state.visible1}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					width = "500"
				>
					<p>将要离开视频?</p>
				</Modal>
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
						<video  style = {{width : '100%'}} id="video-box-mocoplayer-hls-video_html5_api"  controls preload="auto"  src={this.state.movieData['movie_address']}> </video>
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