import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
const pStyle = {
	fontSize: 16,
	color: 'rgba(0,0,0,0.85)',
	lineHeight: '24px',
	display: 'block',
	marginBottom: 16,
  };
const DescriptionItem = ({ title, content }) => (
	<div
		style={{
		fontSize: 14,
		lineHeight: '22px',
		marginBottom: 7,
		color: 'rgba(0,0,0,0.65)',
		}}
	>
		<p
		style={{
			marginRight: 8,
			display: 'inline-block',
			color: 'rgba(0,0,0,0.85)',
		}}
		>
		{title}:
		</p>
		{content}
	</div>
);
class Learn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false
		}
	}

	// 打开抽屉
	showDrawer = () => {
		this.setState({
		  visible: true,
		});
	  };
	
	// 关闭抽屉
	onClose = () => {
		this.setState({
		visible: false,
		});
	};

	render() {
		return (
			<div>
				<List
				dataSource={[
					{
					name: '超人',
					},
					{
					name: '🐖',
					},
				]}
				bordered
				renderItem={item => (
					<List.Item key={item.id} actions={[<a onClick={this.showDrawer}>详细信息</a>]}>
					<List.Item.Meta
						avatar={
						<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
						}
						title={<a href="https://ant.design/index-cn">{item.name}</a>}
						description="周杰伦周杰伦"
					/>
					</List.Item>
				)}
				/>
				<Drawer
				width={640}
				placement="right"
				closable={false}
				onClose={this.onClose}
				visible={this.state.visible}
				>
				<p style={{ ...pStyle, marginBottom: 24 }}>用户信息</p>
				<p style={pStyle}>Personal</p>
				<Row>
					<Col span={12}>
					<DescriptionItem title="姓名" content="超人呀" />{' '}
					</Col>
					<Col span={12}>
					<DescriptionItem title="email" content="chaoren@qq.com" />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
					<DescriptionItem title="城市" content="南阳" />
					</Col>
					<Col span={12}>
					<DescriptionItem title="国家" content="China🇨🇳" />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
					<DescriptionItem title="年龄" content="100" />
					</Col>
					<Col span={12}>
					<DescriptionItem title="个人网站" content={<a>www.chaorenbin.com</a>} />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
					<DescriptionItem
						title="自我介绍"
						content="一百人眼一百我,即使天使亦是魔鬼."
					/>
					</Col>
				</Row>
				<Divider />
				<p style={pStyle}>工作经验</p>
				<Row>
					<Col span={12}>
					<DescriptionItem title="担任职务" content="程序员" />
					</Col>
					<Col span={12}>
					<DescriptionItem title="主要工作" content="编码" />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
					<DescriptionItem title="爱好" content="嘿嘿嘿" />
					</Col>
					<Col span={12}>
					<DescriptionItem title="座右铭" content="给我一杯酒,再给我一根烟,再说你的需求" />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
					<DescriptionItem
						title="Skills"
						content="React 全家桶你随便折腾我,我来自爱用宝,你值得拥有 精通,精通,精通 C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
					/>
					</Col>
				</Row>
				<Divider />
				<p style={pStyle}>联系方式</p>
				<Row>
					<Col span={12}>
					<DescriptionItem title="Email" content="chaorenbin@example.com" />
					</Col>
					<Col span={12}>
					<DescriptionItem title="电话" content="+17637794541" />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
					<DescriptionItem
						title="Github"
						content={(
						<a href="https://github.com/supermanzhangbin/myblog">
							https://github.com/supermanzhangbin/myblog
						</a>
						)}
					/>
					</Col>
				</Row>
				</Drawer>
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

export default Learn;