import React from 'react';
import Nav from './nav/index';
import './index.scss'


class HomeNav extends React.Component {
  render() {
    return (
        <div className = "container">
            {/* 导航条 */}  
            <Nav />
            <div id="content" className="content" >
                {/* 页面内容区域 */}
                {this.props.children}
            </div> 
        </div>
    )
  }  
} 
export default HomeNav;
