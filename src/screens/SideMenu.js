import React, {Component} from 'react';
import {
  ScrollView, 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'
import { ThemedText } from '../components';
import { ThemeConsumer } from '../theme';

class SideMenu extends Component {
  navigateToScreen = (route) => {
    this.props.navigation.navigate(route)
    this.props.navigation.closeDrawer();
  }

  render () {
    return (
      <ThemeConsumer>
      {(props) => (
        <View style={styles.container}>
          <View style={{ 
            backgroundColor: props.theme.colors.primary,
            height: 160,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ThemedText 
              h2 
              style={{
                color: props.theme.colors.text.inverse
              }}
            >
              ReNapp
            </ThemedText>
          </View>
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
      )}
      </ThemeConsumer>
    );
  }
}

const styles = StyleSheet.create({
    container: {
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