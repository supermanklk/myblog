import React, { Component } from 'react';
import { Menu,Avatar,Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SiderContent extends Component {
    
    handleClick = (e) => {
        console.log('click ', e);
    }

    render(){
        return(
            <div className="siderContent">
            <div className="siderContent-top">
            <Avatar 
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={120}
            />
            <p style={{paddingTop:"10px",fontSize:"18px"}}><strong>qq_Del_2</strong></p>
            <p>ID:3113724</p>
            <p>
                <span><Icon type="user" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span><Icon type="cloud" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span><Icon type="file" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span><Icon type="mail" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div  style={{position:"relative",textAlign:"left",top:"30px"}}>
                <h2 style={{fontSize:"22px"}}><strong>账户管理</strong></h2>
            </div>
            </div>
            <div className="siderContent-bottom">

    <div className="menuList">
            <Menu
                 onClick={this.handleClick}
                 defaultSelectedKeys={['1']} 
                 mode="inline"
            >
        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>账号绑定</span></span>}>
         
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>个人信息</span></span>}>
         
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="setting" /><span>操作记录</span></span>}>
          
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>实名认证</span></span>}>
        
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>学籍认证</span></span>}>
         
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>收件地址</span></span>}>
       
        </SubMenu>
      </Menu>
</div>
            </div>
            </div>
        )
    }
}