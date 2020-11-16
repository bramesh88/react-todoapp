import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component{
    render(){
        return(
            <div className="container">
                <h1>Welcome!</h1>
            Welcome to Mr. - {this.props.match.params.name}. Click <Link to="/todos"> here</Link> to see todo list
            </div>
        )
    }
}
export default WelcomeComponent