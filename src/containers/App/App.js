import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from 'components/Layout'
import './App.scss'

import configureStore from 'store'

const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
