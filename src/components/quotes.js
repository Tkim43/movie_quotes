import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';

class Quotes extends Component{
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        return(
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>{this.props.quote}</h5>
            </div>
        )    
    }
}

function mapStateToProps(state){
    return{
        quote: state.quotes.movie
    }
}
// since we dont have any action creators we dont need to pass in an object
export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
})(Quotes);