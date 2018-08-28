import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../reducers/user';
import { validateEmail } from '../utils/email';
import { showMessage } from 'react-native-flash-message';
import {
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage,
} from 'react-native-elements';
import {
  ThemedButton,
} from '../components';

class Login extends Component {
  state = { 
    email: '', 
    password: '',
    loading: false,
   };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = () => {
    const { email, password, } = this.state;
    const { dispatch, navigation, } = this.props;
    this.setState({ loading: true });
    var validations = [
      {
        result: email !== '',
        message: "Email can't be blank."
      },
      {
        result: validateEmail(email),
        message: "Email is not valid."
      },
      {
        result: password !== '',
        message: "Password can't be blank."
      },
    ]
    var error = validations.find( v => v.result === false );
    if (!error) {
      dispatch(handleLogin({ email, password }, navigation, () => {
        this.setState({ loading: false });
      }));
    } else {
      showMessage({
        message: error.message,
        type: "danger",
      });
      this.setState({ loading: false });
    }
  }

  render() {
    const { email, password, loading } = this.state;
    return (
      <KeyboardAvoidingView 
        style={{ backgroungColor: 'white', flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', }}
        enabled
        behavior={ Platform.OS === 'ios' ? 'padding' : null }
      >
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput 
            autoCapitalize='none'
            textContentType='emailAddress'
            onChangeText={(email) => this.setState({email})}
            value={email}
            containerStyle={{
              backgroundColor: '#F0F0F0'
            }}
          />
          <FormLabel>Password</FormLabel>
          <FormInput 
            secureTextEntry
            textContentType='password'
            onChangeText={(password) => this.setState({password})}
            value={password}
            containerStyle={{
              backgroundColor: '#F0F0F0'
            }}
          />
          <View style={{ height: 10 }} />
          <ThemedButton 
            loading={loading}
            onPress={this.handleSubmit} 
            title="Login"
          >
            Submit
          </ThemedButton>
          <ThemedButton
            transparent
            onPress={() => this.props.navigation.navigate('Register')}
            title="I don't have an account"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(Login);
