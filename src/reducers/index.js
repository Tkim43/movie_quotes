// import a helper function from redux
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// then import all the reducers we have created 
import quotesReducer from './quotes_reducer';
import userReducer from './user_reducer'

// now build root reducer that will pass in an object that dictates how our state will look
const rootReducer = combineReducers({
    form: formReducer,
    quotes: quotesReducer,
    user: userReducer
})

// then export the reducer so we can use it in a different file
export default rootReducer;