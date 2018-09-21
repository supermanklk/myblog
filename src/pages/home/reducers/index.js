import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import articleReducer from '../containers/article/reducer'

const rootReducer = combineReducers({
    routing : routerReducer, 
    articleReducer : articleReducer  
})
 
export default rootReducer