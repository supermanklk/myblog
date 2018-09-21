import React from 'react'
import { Layout } from 'antd'
import './index.scss'
import Article from '../article/index'
const { Header, Footer, Sider, Content } = Layout
class Home extends React.Component {
    render() {
        return (   
            <div className="home"> 
                <div className="center">
                    <Article/> 
                </div>
            </div>
        )
    }
}


export default Home