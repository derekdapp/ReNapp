import React from 'react';
import { Switch, Route } from 'react-router-native';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import ModalScreen from './ModalScreen';
import FetchUser from './FetchUser';
import ScreenOne from './ScreenOne';
import SideMenu from './SideMenu';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createStackNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },  
    ScreenOne: {
      screen: ScreenOne
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const DrawerStack = DrawerNavigator({
  Home: MainStack
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

const ModalStack = createStackNavigator(
  {
    Drawer: {
      screen: DrawerStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppStack = createStackNavigator(
  {
    App: {
      screen: ModalStack,
    },
  },
  {
    headerMode: 'none',
  }
);

const AuthStack = createStackNavigator(
  { 
    Login: Login,
    Register: Register, 
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const RootStack = createSwitchNavigator(
  {
    FetchUser: FetchUser,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'FetchUser',
  }
);

class Routes extends React.Component {

  render() {
    return (
      <RootStack />
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


