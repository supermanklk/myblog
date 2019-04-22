import React from 'react';
import {Icon} from 'antd';
import './index.scss';

/**
 * @description     居中,H3的标题,类似慕课
 * @author          Bin
 * @date            2018-12-19
 * @class           TitleH3
 */
class TitleH3 extends React.Component {
    render() {
        let title = this.props.title;
        let strArr = title.split("");
        let strLen = strArr.length;
        const endStr = strArr.map((item, index) => {
            if(index != strLen - 1) {
                item = item + "/";
            }
            
            return <em className = "em_style">{item}</em>;
        })

        return (
            <div className = "type-title">
                {/* 标题的左半部 */}
                <div className = "left"></div>
                {/* 标题的中部 */}
                <div className = "middle">
                    {endStr}
                </div>

                {/* 标题的右半部 */}
                <div className = "right">
                </div>
                
            </div>     
        )
    }
}


export default TitleH3;