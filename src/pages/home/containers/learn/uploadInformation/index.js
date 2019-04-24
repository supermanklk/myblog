import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Collapse, Steps, Button, message, Tabs, Icon } from 'antd';
import * as actions from './action'; 
import Step1 from './step1/index';
import Step2 from './step2/index';
import Step3 from './step3/index';
import { bindActionCreators } from 'redux';
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const Step = Steps.Step;
const steps = [{
	title: '第一步',
	content: <Step1/>,
  }, {
	title: '第二步',
	content: <Step2/>,
  }, {
	title: '第三步',
	content: <Step3/>,
  }];
class UploadInformation extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			current: 0,
		}
    }
    
    	// 风琴
	callback(key) {
		console.log(key);
	}

	// 发布信息步骤
	next() {
		const current = this.state.current + 1;
		this.setState({ current });
	}
	
	prev() {
	const current = this.state.current - 1;
	this.setState({ current });
	}

  
	render() {
        const { current } = this.state;
		return (
			<div className="step">
                <Collapse onChange={this.callback}>
					<Panel header="上传简历/招聘信息" key="1">
						<div>
							<Steps current={current}>
							{steps.map(item => <Step key={item.title} title={item.title} />)}
							</Steps>
							<div className="steps-content">{steps[current].content}</div>
							<div className="steps-action" style = {{ textAlign : 'center'}}>
							{
								current < steps.length - 1
								&& <Button type="primary" onClick={() => this.next()}>下一步</Button>
							}
							{
								current === steps.length - 1
								&& <Button type="primary" onClick={() => message.success('Processing complete!')}>上传</Button>
							}
							{
								current > 0
								&& (
								<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
								上一步
								</Button>
								)
							}
							</div>
						</div>
					</Panel>
				</Collapse> 
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.uploadInformationReducer
})
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadInformation);

// export default UploadInformation;