// a function that returns a function that returns a function
export default store => next => action =>{
    if(typeof action !== 'function'){
        return next(action);
    }

    return action(store.dispatch);
}