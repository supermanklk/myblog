import React from 'react'
import { Layout } from 'antd'
import './index.scss'
import Article from '../article/index'
const { Header, Footer, Sider, Content } = Layout
class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active : '1', // 默认为1 是显示未登录的, 当为2的时候显示用户的个人中心
        }
    }

    componentDidMount() {
        // 判断 用户是否登录 如果没有登录的情况下就不能查看个人中心
        let user =  sessionStorage.getItem('userLogin');
        if(user) {
            // 此刻active应该为2
            this.setState({
                active : '2'
            })
        } else {
            // 用户没有登录,此刻的active应该为1
            this.setState({
                active : '1'
            })
        }
    }

    render() {
        return (    
            <div className="home"> 
                {/* 当active为2的时候,说明用户已经登录,则显示个人中心 */}
                <div className={this.state.active == '2' ? 'center' : 'displayNone'}>
                    <Article/> 
                </div>
                <div className={this.state.active == '1' ? '' : 'displayNone' }>
                    <img className = 'img_author' src="https://supermanbin.oss-cn-beijing.aliyuncs.com/chouzhu.png" alt=""/>
                </div>
            </div>
        )
    }
}


export default Home