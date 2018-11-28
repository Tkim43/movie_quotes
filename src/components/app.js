import React from 'react';
// import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import logo from '../assets/images/Hamtaro.png';
import logo1 from '../assets/images/cute.png';
import {Route} from 'react-router-dom';
import About from './about';
import Home from './home';
import Nav from './nav';
import PublicList from './public_list';
import SecretList from './secret_list';
import Quotes from './quotes';
import SignIn from './sign_in';
import SignUp from './sign_up';

const App = () => (
    <div>
        <img src={logo} className=""/>
        <img src={logo1} className=""/>
        <img src={logo} className=""/>
        <img src={logo1} className=""/>
        <img src={logo} className=""/>
        <img src={logo1} className=""/>
        <Nav/>
        <div className="center">
            <Route exact path ="/" component ={Home}/>
            <Route exact path ="/about" component ={About}/>
            <Route exact path ="/public-list" component ={PublicList}/>
            <Route exact path ="/secret-list" component ={SecretList}/>
            <Route exact path ="/quotes" component ={Quotes}/>
            <Route exact path ="/signIn" component ={SignIn}/>
            <Route exact path ="/signUp" component ={SignUp}/>
        </div>

    </div>
);

export default App;
