import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { ThemeConsumer } from '../theme';
import {
  ThemedButton,
  ThemedText,
} from '../components';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerLeft: (
      <Button
        onPress={() => navigation.toggleDrawer()}
        icon={{
          name: 'menu',
          size: 30,
          color: 'white'
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          width: 50,
          height: 50,
          padding: 0,
          paddingLeft: 10,
        }}
      />
      ),
    };
  };

  render(){
    const { user } = this.props;

    return(
      <ThemeConsumer>
        {(props) => (
          <ScrollView>
            <View>
              <ThemedText>User logged in: {user.email}</ThemedText>
            </View>
            <ThemedButton
            type="danger"
              onPress={() => this.props.dispatch(handleLogout(this.props.navigation))}
              title='Sign Out'
            />
            <ThemedButton
              raised
              onPress={() => this.props.navigation.navigate('MyModal')}
              title={'Open the modal'}
            />
            <ThemedButton
              raised
              onPress={() => props.dispatch({ type: "SET_DARK" })}
              title={'Dark theme me'}
            />
            <ThemedButton
              raised
              onPress={() => props.dispatch({ type: "SET_LIGHT" })}
              title={'Light theme me'}
            />
            <ThemedButton 
              type="danger" 
              title='Danger Button' 
              icon={{name: 'cached'}}
            />
            <ThemedButton 
              rounded
              type="success" 
              title='Success Button' 
            />
            <ThemedButton 
              type="warning" 
              title='Warning Button' 
            />
            <ThemedButton 
              onPress={() => this.props.navigation.navigate('ScreenOne')}
              title='Go to screen one' 
            />
            <ThemedButton 
              transparent
              title='Transparent Button' 
            />
            <ThemedButton 
              loading
              disabled
              title='Disabled Button' 
            />
          </ScrollView>
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