import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        const navStyle ={
            padding: '0 8px'
        }
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
                        <li><Link to="/signIn">Sign In</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;