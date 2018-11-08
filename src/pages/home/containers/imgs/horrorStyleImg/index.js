import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'qnui';
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
    }
    componentWillReceiveProps(nextProps) { 
        console.log('惊悚接收新的props');
    }
    click() {
        this.props.horroToWestern('tab2'); 
    }
  
	render() { 
        console.log('HorrorStyleImg惊悚',this.props);
		return (
			<div>
				 <Tab size="small" type="text">
					<TabPane key={1} tab="惊悚首页">
                        惊悚111111
                        <Button onClick = {() => {this.props.horroToWestern('333')}}>点击跳转到欧美图下的欧美API1111</Button>
                    </TabPane>
					<TabPane key={2} tab="惊悚文档">惊悚2222222222</TabPane> 
					<TabPane key={3} tab="惊悚API">惊悚3333333333</TabPane>
				</Tab> 
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
