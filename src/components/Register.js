import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';
import { 
  Button,
  TextInput,
  Text,
 } from 'react-native';

class Register extends Component {
  state = { email: '', password: 'password', passwordConfirmation: 'password' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ email, password, passwordConfirmation }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <React.Fragment>
        <Text>Email</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={email}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={password}
        />
        <Text>Password Confirmation</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          value={password}
        />
        <Button type='submit' onPress={this.handleSubmit} title='register'></Button>
      </React.Fragment>
    );
  }
}

export default connect()(Register);
