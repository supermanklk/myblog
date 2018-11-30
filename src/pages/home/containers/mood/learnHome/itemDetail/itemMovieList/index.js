import React from 'react';
import './index.scss';

/**
 * @description     该组件是课程章节下的具体视频列表,点击列表内的课程就会进入对应的视频播放页
 *                  该组件需要获取课程的id
 * @author          Bin
 * @date            2018-11-30
 * @class           ItemMovieList
 * @extends         {React.Component}
 */
class ItemMovieList extends React.Component {
    render() {
        return (
            <div>
                <p className = 'box_style'>简介：LNMP通常是指Linux + Nginx + MySQL + PHP的简称。LNMP与LAMP相比，消耗资源更少，支持的并发连接，更高的效率，反向代理功能效率高、静态文件处理快等。本课程和您一起，手把手分别使用yum和源码安装配置LNMP环境，并部署常见的测试管理工具所需环境。</p>
                <div className = 'box_style'>
                    <h4>第1章 课程介绍</h4>
                    <p>本章介绍本课程要点，学习的方式，最终的实践效果。</p>
                    <p>1-1. 课程介绍(01.35)</p>
                </div>
                <div className = 'box_style'>
                    <h4>第2章 LNMP初探</h4>
                    <p>本章介绍L、N、M、P是什么及为什么要使用LNMP。</p>
                    <p>2-1. 最近喜欢椰汁,椰树牌的,鲜榨30年,不用椰子香精当生榨骗人,您值得拥有.</p>
                </div>
            </div>
        )
    }
}


export default ItemMovieList;