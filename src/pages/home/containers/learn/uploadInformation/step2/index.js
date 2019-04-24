import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import { Radio, Input, Icon } from 'antd';
import {bindActionCreators} from 'redux';
import * as actions from '../action'; 
// import { bindActionCreators } from 'redux';
const RadioGroup = Radio.Group;
class Step2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            value: 2,
            userName: '',
          }
	}
	render() {
		return (
			<div>
                <div className="inline_input">
                    <div> 
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                        
                            <br/>
                                <Input  addonBefore="自我介绍" className = "inline_input" placeholder="介绍你自己"/>
                                <Input  addonBefore="担任职务"className = "inline_input" placeholder="你曾经担任过的职务"/>
                            <br/>
                                <Input addonBefore="主要工作" className = "inline_input" placeholder="你期望你主要工作"/>
                                <Input addonBefore="你的爱好" className = "inline_input" placeholder="你有什么爱好"/>
                        </RadioGroup>
                    </div>
                    <div>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <br/>
                                <Input  addonBefore="座 右 铭" className = "inline_input" placeholder="你的座右铭"/>
                                <Input  addonBefore="Github地址"className = "inline_input" placeholder="请输入你的githb地址"/>
                            <br/>
                                <Input addonBefore="你的技能" className = "inline_input" placeholder="描述你掌握的技能"/>
                        </RadioGroup>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step2);