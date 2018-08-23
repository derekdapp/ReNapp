import React from 'react';
import Routes from './src/components/Routes';
import store from './src/store';
import FetchUser from './src/components/FetchUser';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import { StyleSheet, StatusBar, StyleProvider, View, AsyncStorage } from 'react-native';
import { initMiddleware } from 'devise-axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    initMiddleware({ storage: AsyncStorage })
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}