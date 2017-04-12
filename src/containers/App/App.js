import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import _ from 'lodash'
import Page from 'containers/Page'
import './App.scss'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import config from 'constants'
import PageObject from 'libs/PageObject'


class App extends Component {
  render() {
    console.log('config', config)
    const { pages } = config
    const { name, description } = config.appConfig

    const defaultData = new PageObject({ title: _.startCase(name), slug: name, body: description })

    return (
      <BrowserRouter>
        <div className="App">
          <Header pages={pages}/>
          <HeroSection title={name}/>
          <Route exact path="/" component={Page} defaultData={defaultData} pages={pages}/>
          <Route path="/:id" component={Page} defaultData={defaultData} pages={pages}/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App
