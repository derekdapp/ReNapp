const Colors = {
  accent: '#FFFFFF',
  primary: '#4392F1',
  success: '#9BC53D',
  disabled: '#BFBDC1',
  info: '#19bfe5',
  warning: '#ED7D3A',
  danger: '#DC493A',
  background: '#ffffff',
  foreground: '#000000',

  alterForeground: '#707070',
  inverseForeground: '#ffffff',
  secondaryForeground: '#bcbcbc',
  hintForeground: '#969696',
  highlight: '#bcbcbc',

  alterBackground: '#f2f2f2',
  overlayBackground: '#00000057',
  neutralBackground: '#f2f2f2',
  fadedBackground:'#e5e5e5',

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  faded: '#e5e5e5',
  icon: '#c2c2c2',
  neutral: '#f2f2f2',
};

export default {
  name: 'light',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    danger: Colors.danger,
    success: Colors.success,
    warning: Colors.warning,
    transparent: 'transparent',
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.accent,
    text: {
      base: Colors.foreground,
      secondary: Colors.secondaryForeground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground,
    },
    input: {
      text: Colors.alterForeground,
      background: Colors.background,
      label: Colors.secondaryForeground,
      placeholder: Colors.secondaryForeground,
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.alterBackground,
      bold: Colors.alterBackground,
      overlay: Colors.overlayBackground
    },
    button: {
      back: Colors.background,
      underlay: Colors.neutralBackground,
      highlight: Colors.primary
    },
  },
};