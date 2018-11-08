import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import Tab from 'qnui/lib/tab';
const TabPane = Tab.TabPane;
class WesternStyleImg extends React.Component {
    componentDidMount() {
        console.log('加载了欧美风');
    } 
    componentWillReceiveProps(nextProps) {  
        console.log('欧美接收新的props');
    }
	render() {
        const activeKey = this.props.horrorToWestern === '333' ? 3 : 1;
		return (
			<div>
				 <Tab size="small" type="text" activeKey={activeKey}>
					<TabPane key={1} tab="欧美首页">欧美111111</TabPane>
					<TabPane key={2} tab="欧美文档">欧美2222222222</TabPane> 
					<TabPane key={3} tab="欧美API">欧美3333333333</TabPane>
				</Tab> 
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

export default WesternStyleImg;