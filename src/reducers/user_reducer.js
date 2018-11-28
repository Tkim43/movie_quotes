import types from '../actions/types';

const DEFAULT_STATE = {

};

// here we create the reducer itself 
export default (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
}