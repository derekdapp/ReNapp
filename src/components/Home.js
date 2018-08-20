import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class Home extends React.Component {
  render(){
    const { user } = this.props;

    return(
      <View>
        <Text>
          Home Component
        </Text>
        {
          user.id ?
          <React.Fragment>
            <View>
              <Text>User logged in: {user.email}</Text>
            </View>
            <Button
              onPress={() => this.props.dispatch(handleLogout(this.props.history))}
              title='Sign Out'
            />
          </React.Fragment>
          :
          <Button
            onPress={() => this.props.history.push('/login')}
            title='Login'
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);