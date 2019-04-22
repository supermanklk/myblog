import React from 'react'
import './index.scss'
import {connect} from 'react-redux'
import * as actions from './action' 
import { Layout } from 'antd'
import SiderContent from "./component/sider";
import MainContent  from "./component/content";
import MainHeader from "./component/header";
import Btn from "./component/btn";
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
        const {
            Header, Sider, Content,
          } = Layout;
        const suffix = this.props.state.name ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (  
            <div className="article"> 
    <Layout>
            <Sider
                className="sider"
                width={"24%"}
            >
            <Btn/>
            <SiderContent />
            </Sider>
            <Layout className="contentLayout">
              <Header className="contentHeader">
                <MainHeader/>
              </Header>
              <Content className="content">
              <MainContent/>
              </Content>
            </Layout>
    </Layout>
                



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

