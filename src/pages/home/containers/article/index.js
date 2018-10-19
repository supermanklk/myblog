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
            this.props.openVisible(); 
        }
    }


    
 
    render() {
        const suffix = this.props.state.name ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (  
            <div className="article"> 
                <Modal 
                    title="英雄名" 
                    visible={this.props.state.visible} 
                    // onOk={this.props.openVisible}
                    onCancel={this.props.closeVisible}
                    onOk = {this.props.closeVisible}
                    > 
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix} 
                    value={this.props.state.name}
                    onChange={this.props.onChangeUserName} 
                />
                </Modal>
                <h2>大地艺术节：把顶级艺术带到日本乡村</h2> <h1>用户：{this.props.state.name}</h1>  
                <img src={img1} alt=""/>
                <h4>王英菡：日本“大地艺术节”将艺术引入衰落的乡村，历经18年，让越后妻有地区焕发生机。他们是怎么做到的？</h4>
                <p>更新于2018年8月24日 06:01 作者： 王英菡 为FT中文网撰稿</p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
                <p>
                7月29日正式开幕的第七届日本越后妻有“大地艺术节”，以“地球环境时代的美术”为主题，关注自然生态中艺术的多种可能。自2000年创立以来，日本“大地艺术节”成为全球最大型的户外艺术节，在乡村户外展示世界顶级艺术与装置，获得了极高的国际声誉。
                艺术节：振兴乡村的尝试
                </p>
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

