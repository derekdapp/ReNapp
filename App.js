import React from 'react';
import Routes from './src/screens/Routes';
import store from './src/store';
import FetchUser from './src/screens/FetchUser';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, StyleProvider, View, AsyncStorage } from 'react-native';
import { initMiddleware } from 'devise-axios';
import { ThemeProvider, ThemeConsumer } from './src/theme'



export default class App extends React.Component {
  constructor(props) {
    super(props);
    initMiddleware({ storage: AsyncStorage });
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeConsumer>
          {
            (props) => (
              <Provider store={store}>
                <Routes theme={props.theme}/>
              </Provider>
            )
          }
        </ThemeConsumer>
      </ThemeProvider>
    );
  }
}