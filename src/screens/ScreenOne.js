import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ScreenOne extends React.Component {
  render(){
    return(
      <View>
        <Text>This is screen one.</Text>
        <Button title='Open Drawer' onPress={() => this.props.navigation.openDrawer()}></Button>
      </View>
    )
  }
}