import React, {Component} from 'react';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class Controller extends Component {

    constructor() {
        super();
        this.baseurl="http://localhost:8080/";
    }
    render() {
        return (
            <Router>
                <div className="main-controller">
                    <Route exact path='/' render={(props) => <Home {...props} baseurl = {this.baseurl}/>} />
                    <Route exact path='/movie/:id' render={(props) => <Details {...props} baseurl = {this.baseurl} />} />
                    <Route exact path='/bookshow/:id' render={(props) => <BookShow {...props} baseurl = {this.baseurl} />} />
                    <Route exact path='/confirm/:id' render={(props) => <Confirmation {...props} baseurl = {this.baseurl} />} />
                </div>
            </Router>
        )
    }
}

export default Controller;