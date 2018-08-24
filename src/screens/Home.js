import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import Component from '@reactions/component';
import { ThemeConsumer } from '../theme';
import {
  Button
} from 'react-native-elements';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerLeft: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="Drawer!"
          backgroundColor="transparent"
        />
      ),
    };
  };

  componentDidMount(){
    // debugger
  }

  render(){
    const { user } = this.props;

    return(
      <ThemeConsumer>
        {(props) => (
          <View>
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
              raised
              backgroundColor={props.theme.primaryColor}
              onPress={() => this.props.navigation.navigate('MyModal')}
              title={'Open the modal'}
            >
            </Button>
            <Button
              raised
              backgroundColor={props.theme.primaryColor}
              onPress={() => props.dispatch({ type: "SET_DARK" })}
              title={'Dark theme me'}
            >
            </Button>
            <Button
              raised
              backgroundColor={props.theme.primaryColor}
              onPress={() => props.dispatch({ type: "SET_LIGHT" })}
              title={'Light theme me'}
            >
            </Button>
          </View>
        )}
      </ThemeConsumer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);