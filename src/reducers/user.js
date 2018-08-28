import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
import {
  Alert,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';

export const login = (user) => {
  return { type: LOGIN, user };
}

const logout = () => {
  return { type: LOGOUT };
}

export const registerUser = (user, navigation, cb = () => {}) => {
  return (dispatch) => {
    axios.post('/api/auth', user)
    .then( (res) => {      
      const { data: { data: user }} = res;
      dispatch(login(user));
      navigation.navigate('AppStack');
    })
    .catch( res => {
      cb();
      const errors = res.response.data.errors;
      const messages = errors ? Array.from(new Set(res.response.data.errors.full_messages)).join('\n') : 'Something went wrong';
      showMessage({
        message: messages,
        type: "danger",
      });
    })
  }
}

export const handleLogout = navigation => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        dispatch(logout());
        dispatch(setFlash('Logged out successfully!', 'green'));
        navigation.navigate('Login');
      })
      .catch(res => {
        let errors = res.response.data.errors ? res.response.data.errors.join('\n') : 'Something went wrong.'
        showMessage({
          message: errors,
          type: "danger",
        });
      });
  };
};

export const handleLogin = (user, navigation, cb = () => {}) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', user)
      .then(res => {
        const user = res.data.data;
        dispatch(login(user));
        navigation.navigate('AppStack');
      })
      .catch(res => {
        cb();
        var errors = res.response.data.errors;
        const messages = errors ? errors.join('\n') : 'Something went wrong.';
        showMessage({
          message: messages,
          type: "danger",
        });
      });
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    return action.user;
    case LOGOUT:
    return {};
    default:
    return state;
  }
};