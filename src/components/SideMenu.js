import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView, 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => {
    this.props.navigation.navigate(route)
    this.props.navigation.closeDrawer();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={() => this.navigateToScreen('Home')}>
            <Text style={styles.sectionHeadingStyle}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('ScreenOne')}>
            <Text style={styles.sectionHeadingStyle}>
              Screen One
            </Text>
          </TouchableOpacity>
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