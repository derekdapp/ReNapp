import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { showMessage } from 'react-native-flash-message';
import { validateEmail } from '../utils/email';
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

class Register extends Component {
  state = { 
    email: '', 
    password: '', 
    passwordConfirmation: '',
    loading: false,
   };

  handleSubmit = () => {
    this.setState((prevState, props) => {
      return {loading: true};
    });
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, navigation } = this.props;
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
      {
        result: passwordConfirmation !== '',
        message: "Password confirmation can't be blank."
      },
      {
        result: password === passwordConfirmation,
        message: "Passwords do not match."
      }
    ]
    var error = validations.find( v => v.result === false );
    if (!error) {
      dispatch(registerUser({ email, password, passwordConfirmation }, navigation, () => {
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

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { loading, email, password, passwordConfirmation } = this.state;
    return (
      <KeyboardAvoidingView 
        style={{ backgroungColor: 'white', flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', }} 
        behavior={ Platform.OS === 'ios' ? 'padding' : null }
        enabled
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
          <FormLabel>Password Confirmation</FormLabel>
          <FormInput 
            secureTextEntry
            textContentType='password'
            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
            value={passwordConfirmation}
            containerStyle={{
              backgroundColor: '#F0F0F0'
            }}
          />
          <View style={{ height: 10 }} />
          <ThemedButton 
            loading={loading}
            onPress={this.handleSubmit} 
            title="Register"
          >
            Submit
          </ThemedButton>
          <ThemedButton
            transparent
            onPress={() => this.props.navigation.navigate('Login')}
            title="I already have an account"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(Register);
