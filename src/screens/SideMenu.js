import React, {Component} from 'react';
import {
  ScrollView, 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'

class SideMenu extends Component {
  navigateToScreen = (route) => {
    this.props.navigation.navigate(route)
    this.props.navigation.closeDrawer();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListItem
            title='Home'
            leftIcon={{ name: 'home' }}
            onPress={() => this.navigateToScreen('Home')}
          />
          <ListItem
            title='Screen One'
            leftIcon={{ name: 'cached' }}
            onPress={() => this.navigateToScreen('ScreenOne')}
          />
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>footer power</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1
    },
    navItemStyle: {
      padding: 10
    },
    navSectionStyle: {
      backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    }
});

export default SideMenu;