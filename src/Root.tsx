import * as React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import App from './container/App'; // app的入口

const store = configureStore({});

export default class Root extends Component {
  render() {
    return (
      <Provider store = {store} >
        <App />
      </Provider>
    )
  }
}
