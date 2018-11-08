import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import articleReducer from '../containers/article/reducer';
import imgsReducer from '../containers/imgs/reducer';

const rootReducer = combineReducers({
    routing : routerReducer, 
    articleReducer : articleReducer,
    imgsReducer : imgsReducer  
}) 
  
export default rootReducer