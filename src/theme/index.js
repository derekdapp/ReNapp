import React from 'react';

const ThemeContext = React.createContext('theme');
export const ThemeConsumer = ThemeContext.Consumer;

const lightTheme = {
  primaryColor: "#3288D1",
  secondaryColor: "#1CB5A6",
  backgroundColor: "#FFFFFF",
};

const darkTheme = {
  primaryColor: "grey",
  secondaryColor: "purple",
  backgroundColor: "#000000",
};

const reducer = (state, action) => {
  if (action.type === "SET_DARK") {
    return { ...state, theme: { ...darkTheme } };
  }
  if (action.type === "SET_LIGHT") {
    return { ...state, theme: { ...lightTheme } };
  }
};

export class ThemeProvider extends React.Component {
  state = {
    theme: {
      ...lightTheme
    },
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}