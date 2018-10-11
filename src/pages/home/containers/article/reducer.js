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
        case CLOSE_VISIBLE:
        return Object.assign({}, state, handleModal(state,action.kind));
        default:
            return state; 
    }
}
 
const error = () => {
    message.error('英雄，请留下你的大名哦~');
  };

// type : 1 时候直接关闭
// type ： 2 时候判断用户是否输入
function handleModal(state,kind) {
    console.log(76777);
    if(kind === 2) { 
        if(state.name !== '') {
            state.visible = false   
        } else {  
            error()
        }
    } else {
        //
    }
    return state;
}
