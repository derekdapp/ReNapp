import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Switch, Route } from 'react-router-native';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthRoute from './AuthRoute';

class Main extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <Switch>
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route component={() => <Text>No Match</Text>} />
        </Switch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 18,
    backgroundColor: '#fff',
  }
});

export default Main;
