import React from 'react';
import Routes from './src/screens/Routes';
import store from './src/store';
import FetchUser from './src/screens/FetchUser';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, StyleProvider, View, AsyncStorage } from 'react-native';
import { ThemeProvider, ThemeConsumer } from './src/theme';
import axios from 'axios'
import "regenerator-runtime/runtime"

const HEADERS = ['access-token', 'token-type', 'client', 'expiry', 'uid']

const setTokens = async (storage, headers) => {
  for (let token of HEADERS) {
    axios.defaults.headers.common[token] = headers[token]
    await storage.setItem(token, headers[token])
  }
}

export const getTokens = async (storage) => {
  let headers = {}
  for (let token of HEADERS) {
    const t = await storage.getItem(token)
    headers[token] = t
  }

  return headers
}

const clearTokens = async (storage) => {
  for (let token of HEADERS) {
    await storage.removeItem(token)
  }
}

export const initMiddleware = async (options = {}) => {
  let defaultStorage
  try {
    defaultStorage = (typeof localStorage === 'undefined') ? {} : localStorage
  } catch (err) {
    defaultStorage = {}
  }

  const defaults = {
    authPrefix: '/api/auth',
    signOut: '/sign_out',
    validate: '/validate_token',
    storage: defaultStorage,
  }

  const settings = {...defaults, ...options}
  const storage = settings.storage

  axios.interceptors.response.use( async (response) => {
    const { headers } = response
    const oldHeaders = axios.defaults.headers.common
    if (headers['access-token'] && headers['access-token'] !== oldHeaders['access-token'])
      await setTokens(storage, headers)
    return response;
  }, async (error) => {
    const { headers } = error.response
    const oldHeaders = axios.defaults.headers.common
    if (headers['access-token'] && headers['access-token'] !== oldHeaders['access-token'])
      await setTokens(storage, headers)
    return Promise.reject(error);
  });

  axios.interceptors.request.use( async (request) => {
    const { url } = request
    const { authPrefix, signOut, validate } = settings
    const authRegex = new RegExp(authPrefix)
    if (authRegex.test(request.url)) {
      const path = url.split(authPrefix)[1]
      switch(path) {
        case validate:
          const headers = await getTokens(storage)
          request = {...request, ...headers}
          const common = {...request.headers.common, ...headers}
          axios.defaults.headers.common = common
          request.headers.common = common
          break
        case signOut:
          await clearTokens(storage)
          break
        default:
          return request
      }
    }

    return request
  }, (error) => {
    return Promise.reject(error)
  })
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    initMiddleware({ storage: AsyncStorage });
    axios.defaults.baseURL = 'https://dereksandbox.herokuapp.com';
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