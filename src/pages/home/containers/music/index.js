import React from 'react';
import MusicSwiper from './musicSwiper/index';
import MusicJournal from './musicJournal/index';

import './index.scss';

class Music extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <MusicSwiper />
                <MusicJournal />
            </div>
        )
    }
}

export default Music;