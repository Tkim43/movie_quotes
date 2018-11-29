import React, {Component} from 'react';
import auth from '../hoc/auth';

class Quotes extends Component{
    render(){
        return(
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>When we work together, it's much better~!</h5>
            </div>
        )    
    }
}

// since we dont have any action creators we dont need to pass in an object
export default auth(Quotes);