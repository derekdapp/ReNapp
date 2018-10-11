import React from 'react';
import { AsyncStorage, StatusBar, Platform } from "react-native";
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
var Color = require('color');

const ThemeContext = React.createContext('theme');
export const ThemeConsumer = ThemeContext.Consumer;

const themes = [
  lightTheme,
  darkTheme,
]

const saveThemeName = async (name) => {
  try {
    await AsyncStorage.setItem('themeName', name);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

const getThemeName = async () => {
  let themeName = 'light';
  try {
    themeName = await AsyncStorage.getItem('themeName') || 'light';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return themeName;
}

const reducer = (state, action) => {
  if (action.type === "SET_DARK") {
    saveThemeName('dark');
    return { ...state, theme: { ...darkTheme } };
  }
  if (action.type === "SET_LIGHT") {
    saveThemeName('light');
    return { ...state, theme: { ...lightTheme } };
  }
  if (action.type === "SET_THEME_BY_NAME") {
    saveThemeName(action.name);
    return { ...state, theme: { ...themes.find( t => t.name === action.name ) } };
  }
};

export class ThemeProvider extends React.Component {
  state = {
    ready: false,
    theme: {},
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  async componentDidMount(){
    this.state.dispatch({ type: "SET_THEME_BY_NAME", name: await getThemeName() })
    this.setState({ ready: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevState.theme.name !== this.state.theme.name ) {
      if(Platform.OS === 'android'){
        var color = Color(this.state.theme.colors.primary).darken(0.2);
        StatusBar.setBackgroundColor(color.hex(), true)
      }
    }
  }

  render() {
    if (!this.state.ready)
      return null;
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
