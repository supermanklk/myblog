import React from 'react';
import MusicSwiper from './musicSwiper/index';
import MusicRecommend from './musicRecommend/index';

import './index.scss';

class Music extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="music">
                <MusicSwiper />
                <div className="music-con">
                    <div className="music-div">
                        <div className="music-left">
                            <MusicRecommend />
                        </div>
                        <div className="music-right">
                                222
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;