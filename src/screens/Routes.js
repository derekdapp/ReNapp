import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import ModalScreen from './ModalScreen';
import FetchUser from './FetchUser';
import ScreenOne from './ScreenOne';
import SideMenu from './SideMenu';
import FlashMessage from "react-native-flash-message";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

function createRootStack(theme) {
  const RootStack = createSwitchNavigator({
    FetchUser: FetchUser,
    //Auth Screens
    AuthStack: createStackNavigator({
      Login: Login,
      Register: Register,
    }, {
      mode: 'modal',
      headerMode: 'none',
    }),
    AppStack: createStackNavigator({
      ModalStack: createStackNavigator({
        DrawerStack: createDrawerNavigator({
          HomeStack: createStackNavigator({
            Home: Home,
            ScreenOne: ScreenOne
          }, {
            //Home Stack Options
            initialRouteName: 'Home',
            cardStyle: {
              backgroundColor: theme.colors.screen.base
            },
            navigationOptions: {
              headerStyle: {
                backgroundColor: theme.colors.primary,
                minHeight: 40
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          })
        }, {
          //Drawer options
          contentComponent: SideMenu,
          drawerWidth: 300
        }),
        MyModal: ModalScreen,
      }, {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
          backgroundColor: theme.colors.screen.base
        },
      }),
    }, {
      headerMode: 'none',
    }),
  }, {
    initialRouteName: 'FetchUser',
  });
  return RootStack;
}

class Routes extends React.Component {
  render() {
    const { backgroundColor } = this.props.theme;
    const RootStack = createRootStack(this.props.theme)
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}} >
        <RootStack />
        <FlashMessage position="top" />
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

export default Routes;


