import React, { Component } from 'react';
import { Card,Icon,List,Avatar, Button} from 'antd';
export default class MainContent extends Component {

    render(){
        const data = [
            {
              title: '邮箱',
              content:'可用邮箱加密码登录慕课网，可用邮箱找回密码',
              other:'1978246522@qq.com 已绑定,但',
              red:'未验证',
              btn1:<Button>更改</Button>,
              btn2:<Button>立即验证</Button>
            },
            {
              title: '手机',
              content:'可用手机号加密码登录慕课网，可通过手机号找回密码  无法绑定',
              red:'未绑定（绑定手机可获得一积分）',
              btn2:<Button>立即绑定</Button>
            },
            {
              title: '密码',
              content:'用于保护账号信息和登录安全',
              other:'已设置',
              btn2:<Button>修改</Button>
            },
            {
              title: '社交账号',
              content:'绑定第三方账号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享'
            },
          ];


        return(
            <div className="MainContent">
            <Card 
            title={<p style={{display:"inline-block"}}><span>账号绑定</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:"10px",color:"#CDC1C5"}}>完成</span><span style={{fontSize:"10px",color:"red"}}>3/4</span></p>}
            extra={<a href="#" style={{color:"#CDC1C5"}}><Icon type="question-circle" theme="twoTone" />  常见问题</a>} 
            bordered={false} 
            >
               <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                <List.Item actions={[<span>{item.btn1}</span>,<span>{item.btn2}</span>]}>
                    <List.Item.Meta
                         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                         title={<p><strong>{item.title}</strong><span>{item.other}</span><span style={{color:"red"}}>{item.red}</span></p>}
                         description={item.content}
                    />
                </List.Item>
    )}
  />        
            
            
            <div className="iconDiv">
            <div className="iconDiv-item iconDiv-item1">
                    <div className="div-icon">
                        <div><Icon type="wechat" style={{ fontSize: '75px' }} /></div>
                        <div className="icon_list">
                            <ul>
                                <li><strong>微信</strong></li>
                                <li><span style={{color:"red"}}>未绑定</span></li>
                                <li><Button style={{padding:" 0px 5px"}}>添加绑定</Button></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="iconDiv-item iconDiv-item2">
                     <div className="div-icon">
                         <div><Icon type="weibo" style={{ fontSize: '75px' }} /></div>
                         <div className="icon_list">
                            <ul>
                                <li><strong>微博</strong></li>
                                <li><span style={{color:"red"}}>未绑定</span></li>
                                <li><Button style={{padding:" 0px 5px"}}>添加绑定</Button></li>
                            </ul>
                        </div>
                     </div>
            </div>
            <div className="iconDiv-item iconDiv-item3">
                    <div className="div-icon">
                        <div><Icon type="qq"  style={{ fontSize: '75px', color: '#08c' }}/></div>
                        <div className="icon_list">
                            <ul>
                                <li><strong>QQ</strong></li>
                                <li><span style={{color:"red"}}>已绑定</span></li>
                                <li><Button style={{padding:" 0px 5px"}}>解除绑定</Button></li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>

            </Card>
            </div>
        )
    }
}