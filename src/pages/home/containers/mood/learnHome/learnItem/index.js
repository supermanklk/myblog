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

  constructor(props) {
    super(props);
    this.state = {
      mainCourse : {
        img_url : 'http://supermanbin.oss-cn-beijing.aliyuncs.com/demo_biye_learn.png', // 默认
        direction : 'Tornado从入门到进阶 打造支持高并发的技术论坛',
        level : '1', // 课程的难易程度
        
      } // 课程的主介绍
    }
  }

    onclick = () => {
      /* 点击视频需要用户登录,在这个位置设置登录权限 */
      if(!isEmpty(sessionStorage.getItem('userLogin'))) {
        hashHistory.push({
          pathname:'/itemDetail',
          query:{
            courseId : this.state.mainCourse['courseID'],
          }
        })
      } else {
        /* 用户未登录 */
        // message.error('请先登录');
        showRegisater();
      }
     
    }

    componentWillMount = () => {
      console.log('77777777777777',this.props.data);

    }

    componentDidMount = () => {
      const {data} = this.props;
      console.log('在item处接受到data888888',data);
      if(data) {
          data.forEach(element => {
          if(element['is_main'] == 1) {
            // 说明这个数据就是主页
            this.setState({
              mainCourse : element
            })
          }
        });
      }

    }

    componentWillReceiveProps(nextProps) {
      console.log('更新',nextProps);
        if(nextProps.data) {
          
          nextProps.data.forEach(element => {
            if(element['is_main'] == 1) {
              // 说明这个数据就是主页
              this.setState({
                mainCourse : element
              })
            }
          });
        }
    }

    render() {
      return ( 
        <div className="learnItem">
          <div>
            <img onClick = {this.onclick} src={this.state.mainCourse['img_url']} alt=""/>  
            <p style = {{textAlign : 'left', paddingLeft : '10px', marginTop : '15px'}} onClick = {this.onclick}>{this.state.mainCourse.direction}</p>
          </div>

          <div className = "learnItem_bottom">
            <div>
              <p>{this.state.level == '1' ? '实战 初级 50' : (this.state.level == '2' ? '实战 中级 75' : '实战 高级 90')} </p>
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