import React from 'react';
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import {Router, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import reducers from './reducers/index';  

import './index.scss'
  

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
