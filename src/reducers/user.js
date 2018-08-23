import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
import {
  Alert,
} from 'react-native';

export const login = (user) => {
  return { type: LOGIN, user };
}

const logout = () => {
  return { type: LOGOUT };
}

export const registerUser = (user, navigation) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/api/auth', user)
    .then( (res) => {      
      const { data: { data: user }} = res;
      dispatch(login(user));
      navigation.navigate('App');
    })
    .catch( res => {
      const messages =
        res.response.data.errors.full_messages.map(message =>
          <div>{message}</div>);
        dispatch(setFlash(messages, 'red'));
    })
  }
}

export const handleLogout = navigation => {
  return (dispatch) => {
    axios.delete('http://localhost:3001/api/auth/sign_out')
      .then(res => {
        dispatch(logout());
        dispatch(setFlash('Logged out successfully!', 'green'));
        navigation.navigate('Login');
      })
      .catch(res => {
        let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
        if (!Array.isArray(errors))
          errors = [errors]
        const messages =
          errors.map( (message, i) =>
            <div key={i}>{message}</div>);
        dispatch(setFlash(messages, 'red'));
      });
  };
};

export const handleLogin = (user, navigation) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/api/auth/sign_in', user)
      .then(res => {
        const { data: { data: user }} = res;
        dispatch(login(user));
        navigation.navigate('App');
      })
      .catch(res => {
        let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
        if (!Array.isArray(errors))
          errors = [errors]
        const messages =
          errors.map( (message, i) =>
            <div key={i}>{message}</div>);
        dispatch(setFlash(messages, 'red'));
        navigation.navigate('Login');
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