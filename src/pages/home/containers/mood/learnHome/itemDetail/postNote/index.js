import React, { Component } from 'react';
import './index.scss';
import { api } from 'util/index';
import { Input,Modal,Card,Icon,List,Avatar, Button, message} from 'antd';


export default class Btn extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
            visible : false,
            visible1 : false,
            visible2 : false,
            courseId : '', // 课程的id,留言问题是对应的那个课程的
            commentValue : '', // 评论的内容
            noteValue : '', // 发表笔记的内容
        }
    }

    componentWillMount() {
        if(this.props.courseId) {
            this.setState({
                courseId : this.props.courseId
            })
        }
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            console.log('给课程留言/问题所携带的参数',nextProps);
            console.log(nextProps);
            this.setState({
                courseId : nextProps.courseId
            })
        }
    }


    showModal = () => {
        this.setState({
            visible: true,
            visible1 : false,
            visible2 : false
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
          visible1 : false,
          visible2 : false
        });
    }

    showModal1 = () => {
        this.setState({
            visible: false,
            visible1 : true,
            visible2 : false
        });
      }

      showModal2 = () => {
        this.setState({
            visible: false,
            visible1 : false,
            visible2 : true
        });
      }

    //   发表笔记或者评论的时候input改变触发的事件
      changeDocument = (e,type) => {
        if(type == 1) {
            console.log(e,type);
            // 评论
            this.setState({
                commentValue : e.target.value
            })
        } else if(type == 2) {
            // 笔记
            this.setState({
                noteValue : e.target.value
            })
        }
      }

    //   发表评论或者笔记
      postDocument = (type) => {
        let user = sessionStorage.getItem('userLogin');
        if(!user) {
            message.warning('你还未登录,请先登录再做次操作');
            return;
        }
        if(type == 1) {
            // 发表评论
            // 首先检查 commentValue 是否为空
            if(this.state.commentValue == '') {
                message.error('评论不能为空哦');
            } else {
                // 请求评论的api
                api({
                    url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationEvaluation/insertInfoWithNote?courseID=${this.state.courseId}&phone=${user}&evaluation=${this.state.commentValue}`,
                    callback: (rsp) => {
                        console.log('查看发表评价后返回的数据',rsp);
                        if(rsp == 'ok') {
                            message.success('评论发表成功,稍后查看...');
                            // 同时将该弹窗进行隐藏
                            this.setState({
                                visible1 : false // 发表评论的弹窗
                            })
                        }
                    }
                });
            }
        } else if(type == 2) {
            // 发表笔记
            // 首先检查 noteValue 是否为空
            if(this.state.noteValue == '') {
                message.error('笔记不能为空哦');
            } else {
                // 请求笔记的api
                api({
                    url: `http://localhost:8080/GP_MOVIE/public/index.php/api/v1.GraduationNote/insertInfoWithNote?courseID=${this.state.courseId}&phone=${user}&note=${this.state.noteValue}`,
                    callback: (rsp) => {
                        console.log('查看list1返回的数据',rsp);
                        if(rsp == 'ok') {
                            message.success('笔记发表成功,稍后查看...');
                            // 同时将该弹窗进行隐藏
                            this.setState({
                                visible2 : false // 发表笔记 弹窗
                            })
                        }
                    }
                });
            }

        }
      }

      render(){
            
            return(
                <div>

            <Button className="btn" onClick={this.showModal}>留言/问题</Button>

<div className="layer1">
<Modal
          title="我要发布"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          closable="true"
          footer={null}
          className = "zhangbin"
        >
          <Button onClick={this.showModal1} type="primary" shape="round" icon="edit" size="large" style={{marginRight:"40px"}}>我要评论</Button>
          <Button onClick={this.showModal2} type="primary" shape="round" icon="question-circle" size="large">提交笔记</Button>
</Modal>
</div>
<div className="layer2">
<Modal
          title="我要评论"
          visible={this.state.visible1}
          onCancel={this.handleCancel}
          closable="true"
          footer={null}
        >
        {/* 评论 */}
        <Input.TextArea rows={4}  value = {this.state.commentValue} onChange = { (e) => {this.changeDocument(e,1)}} />
        <div style={{overflow:"hidden"}}>
        <Button style={{float:"right",marginTop:"20px"}} type="primary" shape="round"  onClick = {() => { this.postDocument(1)}}  size="large">发表评论</Button>
        </div>
</Modal>
</div>
<div className="layer3">
<Modal
          title="发表笔记"
          visible={this.state.visible2}
          onCancel={this.handleCancel}
          closable="true"
          footer={null}
        >
        {/* 笔记 */}
         <Input.TextArea rows={4} value = {this.state.noteValue} onChange = {(e) => { this.changeDocument(e,2)}}/>
        <div style={{overflow:"hidden"}}>
        <Button style={{float:"right",marginTop:"20px"}} type="primary" shape="round"  onClick = { () => { this.postDocument(2)}}  size="large">发表笔记</Button>
        </div>
</Modal>
</div>
                </div>
            )
      }
}