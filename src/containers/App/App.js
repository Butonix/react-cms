import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Page from 'containers/Page'
import './App.scss'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import config from 'constants'

class App extends Component {
  render() {
    console.log(config.appConfig);
    const { pages } = config;
    const { name } = config.appConfig;
    return (
      <div className="App">
        <Header pages={pages}/>
        ***
        <HeroSection title={name}/>
        <Route exact path="/" component={Page}/>
        <Route path="/:id" component={Page}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App;
