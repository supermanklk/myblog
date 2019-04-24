import React from 'react';
import './index.scss';
import LearnItem from '../learnItem/index';


/**
 * @description 单列电影 目前规定的一行最多出现5个电影
 * @author 		Bin
 * @date 		2018-10-12 
 * @class 		MovieItem
 * @extends 	{React.Component}
 */

class LearnList extends React.Component { 

	constructor(...props) {
		super(...props);
		this.state = {
			list1 : null
		}
	}
	

    render() {
			let www1 = this.props.list1;
			let www2 = this.props.list2;
			return ( 
				<div className="learnlist">
					<LearnItem  data = {www1}/>
					<LearnItem   data = {www2}/> 
					<LearnItem /> 
				</div> 
			)
	}
} 


export default LearnList;