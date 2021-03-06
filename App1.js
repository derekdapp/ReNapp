// import React from 'react';
// import Main from './src/screens/Main';
import store from './src/store';
// import FetchUser from './src/screens/FetchUser';
// import { Provider } from 'react-redux';
// import { StyleSheet, StatusBar, StyleProvider, View, AsyncStorage } from 'react-native';
// import { initMiddleware } from 'devise-axios'

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     initMiddleware({ storage: AsyncStorage })
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <FetchUser>
//           <Main />
//         </FetchUser>
//       </Provider>
//     );
//   }
// }

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
/*
* Both of the following files work for react-navigation
* Routes will always be added and supported by modifying
* the AppNavigation file.  Special redux actions/reducers
* will be handled in Redux Navigation
*   // use this to use react-navigation no redux
*   import AppNavigation from './Navigation/AppNavigation'
*
*   // use this to use react-navigation with redux
*   import ReduxNavigation from './Navigation/ReduxNavigation'
*/

// We're going to use navigation with redux
import ReduxNavigation from './src/navigation/AppNavigation'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ReduxNavigation />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

