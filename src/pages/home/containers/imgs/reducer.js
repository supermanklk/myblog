import {HORROR_TO_WESTERN, CHANGE_KEY} from './action';
const initState = {
    horrorToWestern : '',
    activeKey : 1,
}

export default (state = initState, action) => { 
    switch (action.type) {
        case HORROR_TO_WESTERN : 
            return Object.assign({}, state, {horrorToWestern : action.data, activeKey : 2});
        // 改变Tab的current key
        case CHANGE_KEY :
            return Object.assign({}, state, {activeKey : action.key})
        default : 
            return state;  
    } 
}

