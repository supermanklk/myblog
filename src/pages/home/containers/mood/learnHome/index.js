import React from 'react';
import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Dialog,Button} from 'qnui';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import LearnItem from './learnItem/index';
import LearnList from './learnList/index';
import ItemDetail from './itemDetail/index';    //在线视频-课程详情
import TitleH3 from 'components/titleH3/index';
class LearnHome extends React.Component {
    
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
          });
    }

 
	render() {
		return (
            <div className = 'learnhome'>
                {/* 轮播图 */}
                <div className="App">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img style = {{width : '100%',height : '400px'}} src="https://supermanbin.oss-cn-beijing.aliyuncs.com/biye_1.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img style = {{width : '100%',height : '400px'}} src="https://supermanbin.oss-cn-beijing.aliyuncs.com/biye_1.png" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img style = {{width : '100%', height : '400px'}} src="https://supermanbin.oss-cn-beijing.aliyuncs.com/biye_1.png" alt=""/>
                            </div>
                        </div>
                        {/* <div class="swiper-button-prev"></div> */}
                        {/* <div class="swiper-button-next"></div> */}
                        <div className='swiper-pagination'></div>
                    </div>
                </div>

                {/* 视频列表 */}
                
                <TitleH3 title = "前言技术"/>
                <div className = 'mvItems'>
                    <LearnList/>
                </div>

                <TitleH3 title = "技能提升"/>
                <div className = 'mvItems'>
                    <LearnList/>
                    <LearnList/>
                    <LearnList/>
                </div>

                <TitleH3 title = "精彩手记及猿问"/>
                <div className = 'mvItems'>
                    <LearnList/>
                    <LearnList/>
                </div>

            </div>
		) 
	} 
}




// const mapStateToProps = (state) => ({
// 	state: state.SmallToolsReducer
// })
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({},dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Learn);

export default LearnHome;