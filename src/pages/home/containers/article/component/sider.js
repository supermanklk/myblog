import React, { Component } from 'react';
import { Menu,Avatar,Icon, Modal, Drawer , List, message} from 'antd';
import { api } from 'util/index';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SiderContent extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            name : '',
            id : '',
            email : '',
            phone : '',
            visible : false, // 习题弹窗默认是不显示的状态
            visibleDrawer : false,
            collection_exercises : null // 习题集
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
    }

    componentDidMount() {
        // 在会话中回去用户的信息
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        if(userinfo) {
            this.setState({
                name : userinfo['name'],
                id : userinfo['id'],
                email : userinfo['email'],
                phone : userinfo['phone'],
            })
            
            // 去请求用户信息 习题的信息
            api({
                url: `http://bin.mynatapp.cc/GP_MOVIE/public/index.php/api/v1.Graduation_User/getUser?phone=${sessionStorage.getItem('userLogin')}`,
                callback: (rsp) => {
                    try {
                        let collection_exercises = JSON.parse(rsp['data'][0]['collection_exercises']);
                        this.setState({
                            collection_exercises
                        })
                    } catch (error) {
                        console.log('没有习题');
                    }
                    
                }
            });
            
        }
    }

    // 查看自己收藏的习题
    lookCollectionExercises = ()=> {
        console.log('点击了收藏习题')
        this.setState({
            visible : true
        })
    }
    handleOk = ()=> {
        this.setState({
            visible : false
        })
    }

    handleCancel = ()=> {
        // 清空习题集
        api({
            url: `http://bin.mynatapp.cc/GP_MOVIE/public/index.php/api/v1.Graduation_User/collectionExercises?phone=${sessionStorage.getItem('userLogin')}&collection_exercises=`,
            callback: (rsp) => {
                // 清空成功
                setTimeout(() => {
                    message.success('习题清空成功');
                    this.setState({
                        visible : false,
                        collection_exercises : null
                    }) 
                }, 500);
                
            }
        });
        
    }

    render(){
        const {name, id, email, phone } = this.state;
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            // {
            //   title: 'Ant Design Title 2',
            // },
            // {
            //   title: 'Ant Design Title 3',
            // },
            // {
            //   title: 'Ant Design Title 4',
            // },
        ];
        if(this.state.collection_exercises) {
            var listitem = this.state.collection_exercises.map((item, index) => {
                return (
                        <List.Item.Meta
                        key = {index}
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.quest}</a>}
                        description={item.answer}
                        />
                )
            })
        }   else {
            var listitem = (
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">你还没有收寄习题呢~</a>}
                description=""
                />
            );
        }
        
        return(
            <div className="siderContent">
              <Modal
                title="习题集"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width = "960"
                cancelText = "清空习题集"
                >
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {listitem}
                        </List.Item>
                    )}
                />
            </Modal>    

            {/* 抽屉 */}
            <Drawer
                title="Multi-level drawer"
                width={520}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visibleDrawer}
                cancelText = "清空习题集"
                >
                    This is two-level drawer
                </Drawer>

            <div className="siderContent-top">
            <Avatar 
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={120}
            />
            <p style={{paddingTop:"10px",fontSize:"18px"}}><strong>{name}</strong></p>
            <p>ID:{id}</p>
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
            
            <SubMenu key="sub3" onTitleClick = {this.lookCollectionExercises} title={<span><Icon type="setting" /><span>查看习题</span></span>}>
            
            </SubMenu>
        </Menu>
</div>
            </div>
            </div>
        )
    }
}