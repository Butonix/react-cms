import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import _ from 'lodash'
import Page from 'components/Page'
import './App.scss'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import config from 'constants'
import PageObject from 'libs/PageObject'
import logo from 'assets/img/react-md-cms-logo_150.png'

import configureStore from 'store'

const store = configureStore();


class App extends Component {
  render() {
    // console.log('config', config)
    const { pages } = config
    const { name, description } = config.appConfig

    const defaultData = new PageObject({ title: _.startCase(name), slug: name, body: description })

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Helmet
              titleTemplate="%s - 7APP"
              defaultTitle="react-md-cms"
            >
              <meta charSet="utf-8" />
              <link rel="canonical" href="http://localhost:3000" />
              <link rel="icon" href={logo} />
            </Helmet>
            <Header pages={pages}/>
            <HeroSection title={name}/>
            <Route exact path="/" component={Page} defaultData={defaultData} pages={pages}/>
            <Route path="/:id" component={Page} defaultData={defaultData} pages={pages}/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App
