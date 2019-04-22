import React from 'react'
import './index.scss'
import {connect} from 'react-redux'
import * as actions from './action' 
// 这个有待学习
// import Dimensions from 'react-dimensions'
import img1 from '../../../../image/Snipaste_2018-09-16_15-04-31.png'
import { Modal, Button, Input, Icon } from 'antd'
import { bindActionCreators } from 'redux';
const confirm = Modal.confirm;
class Article extends React.Component {
    
    /**
     * Author : Bin
     * date : 2019/9/21
     * Idea : 测试redux配合react是否成功
     */
    componentDidMount() {
        console.log('测试数据-是否接受到redux的store的数据')
        console.log(this.props) 
        if(this.props.state.name === '') {
            // 发送action开启visible 
            // this.props.openVisible(); 
        }
    }


    
 
    render() {
        const suffix = this.props.state.name ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (  
            <div className="article"> 
                {/* <Modal 
                    title="英雄名" 
                    visible={this.props.state.visible} 
                    // onOk={this.props.openVisible}
                    onCancel={this.props.closeVisible}
                    onOk = {this.props.closeVisible}
                    >  */}
                {/* <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix} 
                    value={this.props.state.name}
                    onChange={this.props.onChangeUserName} 
                /> */}
                
            </div>
        )
    }
} 

// export default Dimensions({
//     getHeight: function() {
//         return window.innerHeight - 1000;
//     },
//     getWidth: function() {
//         return window.innerWidth - 5000;
//     }
// })(Article) 

const mapStateToProps = (state) => ({
    state : state.articleReducer
})
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions,dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps)(Article)

