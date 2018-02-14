import React, { Component, Fragment } from 'react';
import Films from './Films';
import People from './People';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css'



class App extends Component {
  render() { 
    return (
      <Router>
      <Fragment>
        <nav class="nav nav-tabs" id="navbar">
        <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""/>
          <li role="presentation" class="active"><a href="#"><Link to='/peoplepage'>Link to People List</Link></a></li>
          <br/>
          <li role="presentation"><a href="#"><Link to='/filmspage'>Link to Films List</Link></a></li>
        </nav>
        <Switch>
          <Route path='/peoplepage' component={ People }/>
          <Route path='/filmspage' component={ Films } />
        </Switch>
      </Fragment>
      </Router>
    )
  }
  
}

export default App;


