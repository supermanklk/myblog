import React from 'react';
import { Icon } from 'antd';

import './index.scss';

class MusicJournal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="journal clearfix">
                <div className="journal-title">
                    <h3 className="title-head">
                        <span className="title-label"></span>
                        音乐期刊
                    </h3>
                    <span className="title-sub">
                        <a>摇滚</a>
                        <a>另类</a>
                        <a>民谣</a>
                        <a>流行</a>
                        <a>电子</a>
                        <a>英伦</a>
                        <a>古典</a>
                        <a>暗潮</a>
                        <a>爵士</a>
                        <a>金属</a>
                        <a>更多<Icon type="right" /></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default MusicJournal;