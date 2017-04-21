import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Layout from 'components/Layout'
import './App.scss'

import configureStore from 'store'

const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App
