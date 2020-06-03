import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)));



ReactDOM.render(
<Provider store={store}>    
<App /></Provider>, 

document.getElementById('root'));
serviceWorker.unregister();
