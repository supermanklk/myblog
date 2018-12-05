import {Home} from './containers/index';
import Learn from './containers/learn/index';
import News from './containers/news/index';
import It from './containers/it/index';
import Imgs from './containers/imgs/index';
import Movies from './containers/movies/index';
import Music from './containers/music/index';
import Mood from './containers/mood/index';
import HomeNav from '../../components/homeNav/index';
import itemDetail from '../../pages/home/containers/mood/learnHome/itemDetail/index';
import OnlineMovie from '../../pages/home/containers/mood/learnHome/onlineMovie/index';

const createRoutes = {  
    path : '/',
    component : HomeNav, //这个是导航组件 
    indexRoute : {component : Home}, //默认加载的组件 
    childRoutes : [   
        {
            path : 'home', 
            component : Home  
        }, 
        {
            path : 'news',
            component : News 
        },
        {
            path : 'learn',
            component : Learn  
        },
        {
            path : 'it',
            component : It
        },
        {
            path : 'imgs',
            component : Imgs
        },
        {
            path : 'movies',
            component : Movies
        },
        {
            path : 'music',
            component : Music
        },
        {
            path : 'mood',
            component : Mood
        },
        {
            path : 'itemDetail',
            component : itemDetail
        },
        {
            path : 'onlineMovie',
            component : OnlineMovie,
            onEnter : () => {
                /* 播放视频的页面的背景色需要是 #181A1B */
                // console.log(document.querySelector("#content"));
            },
            onLeave : ()=> {
                /* 播放视频页面离开时候需要恢复页面的状态 */
                let element = document.getElementById("home_nav");
                if(element) {
                    element.style.display = 'block';
                }
            }
        
        }
    ] 
}

export default createRoutes