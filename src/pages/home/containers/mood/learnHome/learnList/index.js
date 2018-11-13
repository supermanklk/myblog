import React from 'react';
import './index.scss';
import LearnItem from '../learnItem/index';


/**
 * @description 单列电影 目前规定的一行最多出现5个电影
 * @author Bin
 * @date 2018-10-12 
 * @class MovieItem
 * @extends {React.Component}
 */
class LearnList extends React.Component { 
    render() {
		return ( 
			<div className="learnlist">
        <LearnItem />
        <LearnItem /> 
        <LearnItem /> 
			</div> 
		)
	}
} 


export default LearnList;