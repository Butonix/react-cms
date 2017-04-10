import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Page from 'containers/Page'

import logo from 'assets/img/logo.svg'
import './App.scss'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h2>Welcome to React</h2>
          </div>
          <Route exact path="/" component={Page}/>
          <Route path="/:id" component={Page}/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
