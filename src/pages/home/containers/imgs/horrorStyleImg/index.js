import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Select, Dialog} from 'qnui';
import Tab from 'qnui/lib/tab';
import {horroToWestern} from '../action';
const TabPane = Tab.TabPane;

/**
 * @description 
 * @author Bin
 * @date 2018-10-28
 * @class HorrorStyleImg
 * @extends {React.Component}
 */
class HorrorStyleImg extends React.Component {

    componentDidMount() { 
        console.log('加载了惊悚图片');
        const ctx = this.refs.canvas;
    }
    componentWillReceiveProps(nextProps) { 
        console.log('惊悚接收新的props');
    }
    click() {
        this.props.horroToWestern('tab2'); 
    }
  
	render() { 
        console.log('HorrorStyleImg惊悚',this.props);
        const footer = (
            <div className='dialog-footer-box'>
                <div className='dialog-footer'>
                    <Button type="primary" >确定</Button>
                    <Button style={{marginLeft:"12px"}} type="normal">取消</Button>
                </div>
            </div>
        );
		return (
			<div>
				 <Tab size="small" type="text">
					<TabPane key={1} tab="惊悚首页">
                        惊悚111111
                        <Button onClick = {() => {this.props.horroToWestern('333')}}>点击跳转到欧美图下的欧美API1111</Button>
                    </TabPane>
					<TabPane key={2} tab="惊悚文档">惊悚2222222222</TabPane> 
					<TabPane key={3} tab="惊悚API">
                        <canvas ref = "canvas">

                        </canvas>
                    </TabPane>
				</Tab> 

                <Dialog
                    className = "zhangbin"
                    visible={true}
                    footer={footer}
                    shouldUpdatePosition={true}
                    style={{width:'790px',height:'515px'}}
                    // onClose={this.onClose}
                    title={<span className='title'>物流信息</span>}>

                    <Select size="large"
                    style={{width:"244px"}}
                    value="22222222222"
                    // onChange={this.onChange.bind(this)}
                    >
                        <Select.Option value="option1">option1</Select.Option>
                        <Select.Option value="option2">option2</Select.Option>
                        <Select.Option value="option3">option2</Select.Option>
                        <Select.Option value="option4">option2</Select.Option>
                        <Select.Option value="option5">option2</Select.Option>
                        <Select.Option value="option6">option2</Select.Option>
                        <Select.Option value="option7">option2</Select.Option>
                        <Select.Option value="option8">option2</Select.Option>
                        <Select.Option value="option9">option2</Select.Option>
                        <Select.Option value="option10">option2</Select.Option>
                        <Select.Option value="option11">option2</Select.Option>
                        <Select.Option value="option12">option2</Select.Option>
                        <Select.Option value="option13">option2</Select.Option>
                        <Select.Option value="option14">option2</Select.Option>
                </Select>

                </Dialog>
               
			</div>
		)
	}
}  


const mapStateToProps = (state) => ({ 

})
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({horroToWestern},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HorrorStyleImg);
