import React from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerLeft: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="Drawer!"
          color="#fff"
        />
      ),
    };
  };

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
              onPress={() => this.props.dispatch(handleLogout(this.props.navigation))}
              title='Sign Out'
            />
          </React.Fragment>
          :
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title='Login'
          />
        }
        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title='Open A Modal'
        />
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