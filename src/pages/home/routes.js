import {Home} from './containers/index'
import HomeNav from '../../components/homeNav/index'
const createRoutes = {  
    path : '/',
    component : HomeNav, //这个是导航组件 
    indexRoute : {component : Home}, //默认加载的组件 
    childRoutes : [   
        {
            path : 'home', 
            component : Home  
        },
    ] 
}

export default createRoutes