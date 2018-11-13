import React from 'react';
import './index.scss';
import{ Icon, Button } from 'antd';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


/**
 * @description 单个电影 
 * @author Bin
 * @date 2018-10-12
 * @class MovieItem
 * @extends {React.Component}
 */
class LearnItem extends React.Component {
    render() {
		return ( 
			<div className="learnItem">
                <img src="http://supermanbin.oss-cn-beijing.aliyuncs.com/demo_biye_learn.png" alt=""/>  
                <p>Tornado从入门到进阶 打造支持高并发的技术论坛</p>
                <p>实战 中级 85</p>
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
			</div>
		)
	}
} 


export default LearnItem;