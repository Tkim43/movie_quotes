import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {userSignIn, userSignOut} from '../actions';
// must import connect in order to use redux
import {connect} from 'react-redux'

class Nav extends Component{
    renderLinks(){
        // using a helper method 
        const{auth, signIn, signOut} = this.props;
        // if someone is logged in
        if(auth){
            // you want to call the signOut button on click
            return <button onClick ={signOut} className="red btn">Sign Out</button>;
        }
        return <button onClick ={signIn}>Sign In</button>;

    }
    render(){
        const navStyle ={
            padding: '0 8px'
        }
        console.log("User Auth:", this.props.auth);
        return(
            <nav style ={navStyle} className="blue darken-2">
                <div className="nav-wrapper">
                    <Link to="/">Hamster Movie Quotes~!</Link>
                    <ul className="right">
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to="/public-list">Public List</Link></li>
                        <li><Link to="/secret-list">Secret List</Link></li>
                        <li><Link to="/quotes">Quotes</Link></li>
                        <li>{this.renderLinks()}</li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

//mapsStatetoProps gives us the redux state
function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signIn: userSignIn,
    signOut: userSignOut,
})(Nav);