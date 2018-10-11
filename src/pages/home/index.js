import React from 'react';
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import {Router, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import reducers from './reducers/index';  
import './index.scss' 
// 在入口的地方引入qn的全局样式
import "qnui/build/qnui.min.css"; 

const store = createStoreWithMdware(reducers);  
const history = syncHistoryWithStore(hashHistory, store);
class App extends React.Component {
    render(){ 
        return (
                <Provider store={store}> 
                    <Router history={history} routes={routes} /> 
                </Provider>
        )

    }   
}
  


export default App;
