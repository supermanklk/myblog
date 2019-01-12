import React from 'react';
import './index.scss';
import{ Icon, Button, message } from 'antd';
import {hashHistory} from 'react-router';
import showRegisater from 'components/register/api';
import {isEmpty} from 'util';
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
      /* 点击视频需要用户登录,在这个位置设置登录权限 */
      if(!isEmpty(sessionStorage.getItem('userLogin'))) {
        hashHistory.push({
          pathname:'/itemDetail',
          query:{
            courseId : 1,
          }
        })
      } else {
        /* 用户未登录 */
        message.error('请先登录');
        showRegisater();
      }
     
    }
    render() {
      const {data} = this.props;
      return ( 
        <div className="learnItem">
          <div>
            <img onClick = {this.onclick} src="http://supermanbin.oss-cn-beijing.aliyuncs.com/demo_biye_learn.png" alt=""/>  
            <p style = {{textAlign : 'left', paddingLeft : '10px', marginTop : '15px'}} onClick = {this.onclick}>Tornado从入门到进阶 打造支持高并发的技术论坛</p>
          </div>

          <div className = "learnItem_bottom">
            <div>
              <p>实战 中级 85</p>
            </div>
            <div>
              <Icon type="star" theme="outlined" />
              <Icon type="star" theme="outlined" />
              <Icon type="star" theme="outlined" />
              <Icon type="star" theme="outlined" />
              <Icon type="star" theme="outlined" />
            </div>
          </div>
          
        
        </div>
      )
	}
} 


export default LearnItem;