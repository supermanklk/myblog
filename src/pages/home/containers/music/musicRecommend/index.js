import React from 'react';
import { Icon } from 'antd';
import './index.scss';
// import fetchJsonp from 'fetch-jsonp';
import { api } from 'util/index';

class MusicRecommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rcmdSongList: [],
            highSongList: []
        }
    }

    componentDidMount() {
        api({
            url: 'https://api.bzqll.com/music/netease/hotSongList',
            args: {
                key: '579621905',
                cat: '全部',
                limit: 8,
            },
            callback: (rsp) => {
                this.setState({
                    rcmdSongList: rsp.data
                })
            }
        });

        // 获取精品歌单
        api({
            url: 'https://api.bzqll.com/music/netease/highQualitySongList',
            args: {
                key: '579621905',
                cat: '全部',
                limit: 9,
            },
            callback: (rsp) => {
                let playlists = rsp.data.playlists;
                playlists.pop();
                this.setState({
                    highSongList: playlists
                })
            }
        });

    }

    render() {
        let { rcmdSongList, highSongList } = this.state;
        return(
            <div className="music-recommend">

                {/* 热门推荐 */}
                <div className="recommend">
                    <div className="hd">
                        <Icon className="icon-hd" type="fire" theme="filled" />
                        <div className="tit">热门推荐</div>
                        <div className="tab">
                            <span>华语</span><span className="line">|</span>
                            <span>流行</span><span className="line">|</span>
                            <span>摇滚</span><span className="line">|</span>
                            <span>民谣</span><span className="line">|</span>
                            <span>电子</span>
                        </div>
                        <div className="more">更多
                            <Icon className="icon-swap-right" type="swap-right" />
                        </div>
                    </div>
                    <div className="bd">
                        {
                            rcmdSongList.map((item, index) => {
                                return(
                                    <div className="songlist" key={ item.id }>
                                        <div className="cover">
                                            <img src={ item.coverImgUrl }/>
                                            <a className="msk" href={ "https://music.163.com/#/playlist?id="+item.id }></a>
                                            <div className="bottom">
                                                <Icon className="icon-customer-service" type="customer-service" theme="filled" />
                                                <span className="num">{ item.songNum }首</span>
                                                <Icon className="icon-play-circle" type="play-circle" theme="filled" />
                                            </div>
                                        </div>
                                        <p className="desc">
                                            <a href={ "https://music.163.com/#/playlist?id="+item.id }>{ item.title }</a>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                {/* 精品歌单 */}
                <div className="quality">
                    <div className="hd">
                        <Icon className="icon-hd" type="star" theme="filled" />
                        <div className="tit">精品歌单</div>
                        <div className="more">更多
                            <Icon className="icon-swap-right" type="swap-right" />
                        </div>
                    </div>
                    <div className="bd">
                    {
                        highSongList.map((item, index) => {
                            return(
                                <div className="songlist" key={ item.id }>
                                    <div className="cover">
                                        <img src={ item.coverImgUrl }/>
                                        <a className="msk" href={ "https://music.163.com/#/playlist?id="+item.id }></a>
                                        <div className="bottom">
                                            <Icon className="icon-customer-service" type="customer-service" theme="filled" />
                                            <span className="num">{ item.songNum }首</span>
                                            <Icon className="icon-play-circle" type="play-circle" theme="filled" />
                                        </div>
                                    </div>
                                    <p className="desc">
                                        <a href={ "https://music.163.com/#/playlist?id="+item.id }>{ item.title }</a>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            
            </div>
        )
    }
}

export default MusicRecommend;