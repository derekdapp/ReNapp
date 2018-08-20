import React from 'react';
import Main from './src/components/Main';
import store from './src/store';
import FetchUser from './src/components/FetchUser';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import { StyleSheet, StatusBar, StyleProvider, View } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <FetchUser>
          <NativeRouter>
            <Main />
          </NativeRouter>
        </FetchUser>
      </Provider>
    );
  }
}