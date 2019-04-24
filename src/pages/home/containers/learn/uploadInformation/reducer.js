import {OPEN_VISIBLE, CHANGE_NAME, CLOSE_VISIBLE} from './action';
import { Alert, message } from 'antd'
const initState = {
    name : '',
    visible : false, //输入
    
}

export default (state = initState, action) => { 
   switch (action.type) { 
       case OPEN_VISIBLE: 
           return Object.assign({}, state, {visible : true});
       case CHANGE_NAME:
           console.log(77)
           console.log(action)
           return Object.assign({}, state, {visible : true, name : action.name}); 
       default:
           return state; 
   }
}


