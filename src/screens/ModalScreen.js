import React from 'react';
import {
  View,
} from 'react-native';
import {
  ThemedButton,
  ThemedText,
} from '../components/index.js';

export default class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText h3>This is a modal!</ThemedText>
        <ThemedButton
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}