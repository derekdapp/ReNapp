import React from 'react';
import { View, Text } from 'react-native';
import {
  ThemedButton
} from '../components'

export default class ScreenOne extends React.Component {
  render(){
    return(
      <View>
        <Text>This is screen one.</Text>
        <ThemedButton title='Open Drawer' onPress={() => this.props.navigation.openDrawer()} />
      </View>
    )
  }
}