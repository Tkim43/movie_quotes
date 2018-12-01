import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// we need to import provider because it provides all the information for your app
import {Provider} from 'react-redux'
// we need to import two things from redux directly 
import {createStore, applyMiddleware} from 'redux';
// import your root reducer
import rootReducer from './reducers';
import App from './components/app';
import think from './middleware/think';
import types from './actions/types';


// create the store which is a function that has 3 arguments
// 1. root reducer
// 2. empty object which represents represents a default state which are any initial values 
// you want your state to start with
// 3. apply middle ware 
const store = createStore(rootReducer, {}, applyMiddleware(think));

if(localStorage.getItem('token')){
    // dispatch a new action with a type propery of 
    store.dispatch({type: types.SIGN_IN});
}

// now you wrap everything around app 
// you set a prop to store to connect it ot the store we just created 
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
 