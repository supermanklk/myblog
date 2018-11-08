import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { Drawer, List, Avatar, Divider, Col, Row, Collapse, Steps, Button, message, Tabs, Icon } from 'antd';
import Jobhunting from './jobhunting/index'; //求职者
import Recruitment from './recruitment/index'; //招聘单位
import UploadInformation from './uploadInformation/index'; //上传信息
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const Step = Steps.Step;
class Learn extends React.Component {
	render() {
		return (
			<div>
				<UploadInformation/>
				<Tabs defaultActiveKey="1">
					<TabPane tab={<span><Icon type="apple" />求职者</span>} key="1">
						<Jobhunting/>
					</TabPane>
					<TabPane tab={<span><Icon type="android" />直聘</span>} key="2">
						<Recruitment/>
					</TabPane>
				</Tabs>
				
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