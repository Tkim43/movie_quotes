import types from './types';
import axios from 'axios';

// once we call any action creators or the function it will go to the middleware then the reducer
export function userSignIn(){
    return{
        type: types.SIGN_IN
    }
}

export function userSignOut(){
    return{
        type: types.SIGN_OUT
    }
}

export function userSignUp(){
    return{
        type: types.SIGN_UP
    }
}