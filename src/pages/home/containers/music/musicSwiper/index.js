import React from 'react';

import { Button, Icon } from 'antd';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import './index.scss';

class MusicSwiper extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        new Swiper(this.swiperEle, {
            effect : 'fade',
            autoplay: true,
            loop: true,
            pagination : {
                el: this.paginationEle,
            },
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext
            },
        });
    }

    render() {
        // 轮播图数据
        const swiperList = [
            {
                href: 'https://music.163.com/#/album?id=74790561',
                imgSrc: 'http://p1.music.126.net/MgtHptUnO8coBywZZfZBzg==/109951163714486168.jpg'
            },
            {
                href: 'https://music.163.com/#/album?id=73496717',
                imgSrc: 'http://p1.music.126.net/jsT2ayo0Ca_YjwgbFzNEAA==/109951163713055390.jpg'
            },
            {
                href: 'https://music.163.com/#/song?id=1331841670',
                imgSrc: 'http://p1.music.126.net/UJKB5Wlb7T_-HzvBrH7SVw==/109951163714473744.jpg'
            },
            {
                href: 'https://music.163.com/#/album?id=74796850',
                imgSrc: 'http://p1.music.126.net/VtkaKYodFx7DEzEkLSxBwg==/109951163714472405.jpg'
            },
            {
                href: 'https://music.163.com/#/mv?id=10782319',
                imgSrc: 'http://p1.music.126.net/GtZwEUQXG1rWZX2T6Bal-Q==/109951163712378876.jpg'
            },
            {
                href: 'https://music.163.com/m/at/5c063cae2e7ff0180c99b0d9',
                imgSrc: 'http://p1.music.126.net/L8mYZEyYqy2F95m6HBgcIg==/109951163714477390.jpg'
            },
            {
                href: 'https://music.163.com/#/song?id=1330348068',
                imgSrc: 'http://p1.music.126.net/PVhJyZ3ydWCk_AbztBuYIA==/109951163715467738.jpg'
            },
            {
                href: 'https://music.163.com/m/at/5c0a4b23af78cf57b183f735',
                imgSrc: 'http://p1.music.126.net/zMxDpDzY1RE_R4N-TSn1lg==/109951163714480983.jpg'
            }
        ]

        return(
            <div className="music-swiper">
                <div className="music-swiper-con">
                    <div className="music-swiper-layout">
                        <div className="swiper-container" 
                            ref={(node) => { this.swiperEle = node }}
                        >
                            <div className="swiper-wrapper">
                            {
                                swiperList.map((item, index) => {
                                    return(
                                        <div className="swiper-slide">
                                            <a href={ item.href }>
                                                <img src={ item.imgSrc } />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="swiper-pagination" ref={(node) => { this.paginationEle = node }}></div>
                            <div className="swiper-button-prev music-swiper-button-prev" ref={(node) => { this.buttonPrev = node }}>
                                <Icon type="left" className="icon-left"/>
                            </div>
                            <div className="swiper-button-next musc-swiper-button-next" ref={(node) => { this.buttonNext = node }}>
                                <Icon type="right" className="icon-right"/>
                            </div>
                            
                        </div>
                        <div className="myinfo">
                            <div className="myinfo-con">
                                <img src="http://p2.music.126.net/R8WsHUBXL6ozIsI0bRzing==/19178781323817662.jpg?param=80y80" />
                                <div className="myinfo-msg">
                                    <p className="myinfo-nick">猫几酱</p>
                                    <span className="myinfo-level">LV.7</span>
                                    <Button>签到</Button>
                                </div>
                            </div>
                            <ul>
                                <li>动态</li>
                                <li>关注</li>
                                <li>粉丝</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicSwiper;