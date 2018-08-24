import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../reducers/user';
import axios from 'axios'

class FetchUser extends Component {
  state = { loaded: false };

  componentDidMount = async () => {
    const { isAuthenticated, dispatch } = this.props;
    if (isAuthenticated) {
      this.continueToApp()
    } else {
      const hasToken = await this.checkLocalToken()
      if (hasToken) {
        axios.get('http://localhost:3001/api/auth/validate_token')
          .then( async res => {
            await dispatch(login(res.data.data))
            this.continueToApp()
          }).catch( (err) => { 
            this.sendToLogin() } )
      } else {
        this.sendToLogin();
      }
    }
  }

  checkLocalToken = async () => {
    const token = await AsyncStorage.getItem('access-token')
    return token
  }

  continueToApp = () => {
    this.props.navigation.navigate('AppStack');
  }

  sendToLogin = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return <View><Text>Loading</Text></View>;
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.user.id };
};

export default connect(mapStateToProps)(FetchUser);