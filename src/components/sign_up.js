import React, {Component}from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {userSignUp} from '../actions';
import {connect} from 'react-redux';

class SignUp extends Component{
    handleSignUp = (values) =>{
        console.log("Sign UP", values);
        this.props.signUp(values);
    }
    render(){
        const{handleSubmit, signUpError} = this.props;
        return(
            <div className="container">
                <h1 className="center">you need hamster paw to Sign Up</h1>
                <form onSubmit ={handleSubmit(this.handleSignUp)}>
                    <div className="row">
                        <Field name="email" label="Email" component={Input}/>
                    </div>
                    <div className="row">
                        <Field size="s6" type="password" name="password" label ="Password" component={Input}/>    
                        <Field size ="s6" type="password" name="confirmPassword" label ="Confirm Password" component={Input}/>
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn grey darken-2">Sign Up</button>
                            <p className="red-text text-darken-2">{signUpError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )    
    }
}

function validate(values){
    const {confirmPassword, email, password} = values;
    const errors = {};
    if(!email){
        errors.email = "Please enter your email";
    }
    if(!password){
        errors.password = "Please create a password";
    }
    if(password !== confirmPassword){
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}

SignUp =reduxForm({
    form: 'signUp',
    validate: validate
})(SignUp);

function mapStateToProps(state){
    return{
        signUpError: state.user.signUpError
    }
}
export default connect(mapStateToProps, {
    signUp: userSignUp
})(SignUp);