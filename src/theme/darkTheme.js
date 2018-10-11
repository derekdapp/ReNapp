const Colors = {
  accent: '#FFFFFF',
  primary: '#2F394D',
  success: '#519E8A',
  disabled: '#6D6A75',
  info: '#19bfe5',
  warning: '#F09D51',
  danger: '#96031A',
  background: '#02111B',
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
  name: 'dark',
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
      primary: Colors.primary,
      base: Colors.foreground, //black
      secondary: Colors.secondaryForeground, //grey
      accent: Colors.accent,
      inverse: Colors.inverseForeground, //white
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