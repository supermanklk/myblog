import React from 'react';
import {Icon, Drawer, Radio} from 'antd';
import Course from '../../../../../../components/course/index';
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
			placement: 'bottom'
		}
	} 

	/* 进这个页面以后,需要将页面的颜色改为#181A1B */
	componentDidMount() {
		console.log(111,document.getElementById("home_nav"));
		let element = document.getElementById("home_nav");
		if(element) {
			element.style.display = 'none';
		}
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


    render() {
		return ( 
			<div className = "onlineMovie_wrap">	
				<div className = "onlineMovie">
					
					{/* 播放页-左边导航 */}
					<div className = "left">
						<dl>
							<dd onClick = {this.showDrawer}><Icon type="hdd" theme="filled" /><br/>章节</dd>
							<br/>
							<dd><Icon type="question-circle" theme="filled" /><br/>问答</dd>
							<br/>
							<dd><Icon type="edit" theme="filled" /><br/>笔记</dd>
							<br/>
							<dd><Icon type="message" theme="filled" /><br/>评论</dd>
						</dl>
					</div>

					{/* 播放页-播放区 */}
					<div className = "center">
						<Drawer
							title		=	"章节目录"
							placement	=	{this.state.placement}
							closable	=	{true}
							onClose		=	{this.onClose}
							visible		=	{this.state.visible}
							// style 		=	{{background : 'red'}}
							>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</Drawer>
						<video style = {{width : '100%'}} id="video-box-mocoplayer-hls-video_html5_api"  controls preload="auto"  src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E6%88%91%E7%9A%84%E5%B0%8F%E5%BD%A4%E5%BD%A4-cut.mp4"> </video>
					</div>

					{/* 播放页-介绍 */}
					<div className = "right">
						<div className = "authorInfo">
							{/* 包含坐着的头像, 笔名, 职业 */}
							<div className = "top">
								<img className = "top_left" src="http://supermanbin.oss-cn-beijing.aliyuncs.com/superman.png" alt=""/>
								<p className ="top_right">
									<span className = "name">Supermanbin</span>
									<span className = "position">前端工程师</span>
								</p>
							</div>

							{/* 作者的简介 */}
							<p className = "introduction">
								我是超人,穿着复仇者联盟的匡威少年,我抚摸着樱桃敲着我的代码,我很强对了我在吃无糖薄荷糖,包装蓝不是蓝莓味,DJ在哪里,好了我有点疯请无视我.
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


export default OnlineMovie;