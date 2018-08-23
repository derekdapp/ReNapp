import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../reducers/user';
import {
  Button,
  TextInput,
  Text
} from 'react-native';

class Login extends Component {
  state = { email: 'test@test.com', password: 'password' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, navigation } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin({ email, password }, navigation));
  }

  render() {
    const { email, password } = this.state;
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
        <Button onPress={this.handleSubmit} title="Login">Submit</Button>
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title='Register'
        />
      </React.Fragment>
    );
  }
}

export default connect()(Login);
