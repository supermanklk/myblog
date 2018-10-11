import {Home} from './containers/index';
import Learn from './containers/learn/index';
import HomeNav from '../../components/homeNav/index';
const createRoutes = {  
    path : '/',
    component : HomeNav, //这个是导航组件 
    indexRoute : {component : Home}, //默认加载的组件 
    childRoutes : [   
        {
            path : 'home', 
            component : Home  
        }, 
        // {
        //     path : 'news',
        //     component : News 
        // },
        {
            path : 'learn',
            component : Learn 
        },
        // {
        //     path : 'it',
        //     component : It
        // },
        // {
        //     path : 'imgs',
        //     component : Imgs
        // },
        // {
        //     path : 'movies',
        //     component : Movies
        // },
        // {
        //     path : 'music',
        //     component : Music
        // },
        // {
        //     path : 'mood',
        //     component : Mood
        // },
    ] 
}

export default createRoutes