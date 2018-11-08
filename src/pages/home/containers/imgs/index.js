import React from 'react';
// import './index.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Button} from 'qnui'; 
import HorrorStyleImg from './horrorStyleImg/index.js';
import WesternStyleImg from './westernStyleImg/index.js';
import {horroToWestern, changeKey} from './action';
const TabPane = Tab.TabPane;
class Imgs extends React.Component { 
  

	render() {
		const  {activeKey} = this.props.state;
		return ( 
			<div> 
				 <Tab size="small" type="text" activeKey={activeKey} onChange = {(key) => {this.props.changeKey(key)}}> 
					<TabPane key={1} tab="惊悚图">
						<HorrorStyleImg/>  
					</TabPane>   
					<TabPane key={2} tab="欧美图">
						<WesternStyleImg horrorToWestern = {this.props.state.horrorToWestern}/>
					</TabPane>
					<TabPane key={3} tab="API">   
						33333333333 
					</TabPane> 
				</Tab> 
			</div>
		)
	}
} 

const mapStateToProps = (state) => ({     
	state : state.imgsReducer  
})
const mapDispatchToProps = (dispatch) => { 
	return bindActionCreators({horroToWestern, changeKey},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Imgs);
