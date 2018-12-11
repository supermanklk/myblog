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
            <div>
                <MusicSwiper />
                <div className="music-con">
                    <MusicRecommend />
                </div>
            </div>
        )
    }
}

export default Music;