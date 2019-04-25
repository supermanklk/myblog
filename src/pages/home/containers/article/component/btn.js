import React, { Component } from 'react';
import { Input,Modal,Card,Icon,List,Avatar, Button} from 'antd';

export default class Btn extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
            visible : false,
            visible1 : false,
            visible2 : false
        }
    }

    // state = { visible: false }

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

      render(){
            
            return(
                <div>

            <Button onClick={this.showModal}>更改</Button>

<div className="layer1 binbin">
<Modal
          title="我要发布"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          closable="true"
          footer={null}
        >
          <Button onClick={this.showModal1} type="primary" shape="round" icon="edit" size="large" style={{marginRight:"40px"}}>我要评论</Button>
          <Button onClick={this.showModal2} type="primary" shape="round" icon="question-circle" size="large">我有问题</Button>
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
        <Input.TextArea rows={4} />
        <div style={{overflow:"hidden"}}>
        <Button style={{float:"right",marginTop:"20px"}} type="primary" shape="round"  size="large">发表评论</Button>
        </div>
</Modal>
</div>
<div className="layer3">
<Modal
          title="我要提问"
          visible={this.state.visible2}
          onCancel={this.handleCancel}
          closable="true"
          footer={null}
        >
         <Input.TextArea rows={4} />
        <div style={{overflow:"hidden"}}>
        <Button style={{float:"right",marginTop:"20px"}} type="primary" shape="round"  size="large">发表问题</Button>
        </div>
</Modal>
</div>
                </div>
            )
      }
}