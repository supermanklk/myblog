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
class MovieItem extends React.Component {
    render() {
		return ( 
			<div className="movieitem">
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535096871.webp" alt=""/>  
                <p>李茶的姑妈</p>
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Icon type="star" theme="outlined" />
                <Button type="primary">选座购票</Button>
			</div>
		)
	}
} 


export default MovieItem;