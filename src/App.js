import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from './mints/redux/store';
import Mints from './mints/Mints';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Mints />
      </Provider>
    );
  }
}

export default App;
