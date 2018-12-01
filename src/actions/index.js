import types from './types';
import axios from 'axios';

export const getMovieQuote = () => async dispatch => {

    // same as the ajax config object
    const axiosConfig = {
        // any axios config is the last argument in any of its method
        headers: {
            authorization: localStorage.getItem('token')
        }
    }

    const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);
    dispatch({
        type: types.GET_QUOTE,
        quote: resp.data.message
    })
}

// once we call any action creators or the function it will go to the middleware then the reducer
export function userSignIn(user){
    return async function(dispatch){
        try{
            const resp = await axios.post('http://api.reactprototypes.com/signin',user);

        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_IN
        });
        }
        catch(err){
            dispatch({
                type: types.SIGN_IN_ERROR,
                error: "Invalid email and/ or password"
            })
        }
    }
}

export function userSignOut(){
    // remove token when they log out 
    localStorage.removeItem('token');
    return{
        type: types.SIGN_OUT
    }
}

export function userSignUp(user){
    return async function(dispatch){
        try{
            const resp = await axios.post('http://api.reactprototypes.com/signup', user)
            localStorage.setItem("token", resp.data.token);

            dispatch({
                types: types.SIGN_UP
            });
        }
        catch(err){
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'email already in use'
            })
        }
    }
}