import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Login from "./components/login";
import Header from "./components/Header";




const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={App} exact={true}/>
       <Route path="/login" component={Login} exact={true}/> 
    </Switch>
  </div>    
</BrowserRouter></Provider>, 

document.getElementById('root'));
serviceWorker.unregister();
