import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from './my_register/redux/store';
import MyRegister from './my_register/MyRegister';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyRegister />
      </Provider>
    );
  }
}

export default App;
