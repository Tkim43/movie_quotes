import React, {Component}from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';

class SignUp extends Component{
    handleSignUp = (values) =>{
        console.log("Sign UP", values);
    }
    render(){
        const{handleSubmit} = this.props;
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

export default reduxForm({
    form: 'signUp',
    validate: validate
})(SignUp);