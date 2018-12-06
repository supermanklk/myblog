import React from 'react';

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
        });
    }

    render() {
        return(
            <div className="music-swipercon">
                <div className="swiper-container music-swiper" 
                    ref={ (node) => { this.swiperEle = node } }
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://img-cdn2.luoo.net/site/201711/5a1b7eec0eeb9.jpg" />
                        </div>
                        <div className="swiper-slide">
                            <img src="http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg" />
                        </div>
                    </div>
                    <div className="swiper-pagination music-swiper-pagination"
                        ref={ (node) => { this.paginationEle = node } }
                        ></div>
                </div>
            </div>
        )
    }
}

export default MusicSwiper;