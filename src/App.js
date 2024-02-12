
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key="General" pageSize={6} country='in' category="General" /></Route>
            <Route exact path="/Business"><News key="Business" pageSize={6} country='in' category="Business" /></Route>
            <Route exact path="/Entertainment"> <News key="Entertainment" pageSize={6} country='in' category="Entertainment" /></Route>
            <Route exact path="/General"><News key="General" pageSize={6} country='in' category="General" /></Route>
            <Route exact path="/Health"><News key="Health" pageSize={6} country='in' category="Health" /></Route>
            <Route exact path="/Science"><News key="Science" pageSize={6} country='in' category="Science" /></Route>
            <Route exact path="/Sports"><News key="Sports" pageSize={6} country='in' category="Sports" /></Route>
            <Route exact path="/Technology"><News key="Technology" pageSize={6} country='in' category="Technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

