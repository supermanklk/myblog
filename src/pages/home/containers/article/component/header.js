import React, { Component } from 'react';
import { Icon } from 'antd';
export default class MainHeader extends Component {

    render(){
        return(
            <div className="headerContent" style={{lineHeight:"45px"}}>
            <p style={{color:"#EE7621",fontSize:"12px",display:"inline-block",width:"98%"}}>
                上次登录时间：2019-04-20 13：01：34&nbsp;&nbsp;&nbsp;地点：
                <span style={{color:"#63B8FF"}}>查看最近操作记录</span>
            </p>
            <p style={{color:"#EE7621",fontSize:"8px",display:"inline-block",width:"2%"}}>
            <Icon type="close-circle" theme="twoTone" />
            </p>
            </div>
        )
    }
}