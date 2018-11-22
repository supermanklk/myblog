import React from 'react';
import './index.scss';
import{ Icon, Button } from 'antd';
import {hashHistory} from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


/**
 * @description 单个课程, 单击对应的课程进入相对应的课程详情
 * @author Bin
 * @date 2018-10-12
 * @class MovieItem
 * @extends {React.Component}
 */
class LearnItem extends React.Component {
    onclick = () => {
      hashHistory.push({
        pathname:'/itemDetail',
        query:{
          courseId : 1,
        }
      })
    }
    render() {
      const {data} = this.props;
      return ( 
        <div className="learnItem">
                  <img onClick = {this.onclick} src="http://supermanbin.oss-cn-beijing.aliyuncs.com/demo_biye_learn.png" alt=""/>  
                  <p onClick = {this.onclick}>Tornado从入门到进阶 打造支持高并发的技术论坛</p>
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