import React from 'react'
import './index.scss'
import { hashHistory } from 'react-router'


class mainItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'Spring Boot 2.0深度实践之系列总览',
            img_url : 'https://img.mukewang.com/5bbafd180001688d06000338-240-135.jpg',
            level : '3',
            peopleNumber : '17396',
            money : '0',
            oldMoney : '0',
            isDiscount : false
        }

    }


    clickItem = () => {
        // 跳转到mood
        hashHistory.push({
            pathname: '/mood',
        });
    }



    render() {
        console.log('props',this.props.data);
        if(this.props.data) {
            // 说明这个iten被传值了,就需要渲染
            
        }
        const {title, img_url, level, peopleNumber, money, oldMoney, isDiscount} = this.props.data;
        return (
            <div>  
                <div className = "main_item" onClick = {this.clickItem}>
                    <div className="main_item_img">
                        <img src={img_url} alt=""/>
                    </div>
                    <div className = "title">
                        <p>{title}</p>
                    </div>
                    <div className = "main_item_detail">
                        <div>实战</div>
                        <div>{level == '3' ? '高级' : (level == '2' ? '中级' : '初级')}</div>
                        <div>人{peopleNumber}</div>
                        <div>※※※※※※</div>
                    </div>
                    <div className = "main_item_money">
                        <div>${money}</div>&nbsp;&nbsp;
                        <div style = {{'text-decoration':'line-through'}}>${oldMoney}</div>
                        &nbsp;&nbsp;&nbsp;
                        <div>{isDiscount == true ? '限时优惠' : ''} </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default mainItem;