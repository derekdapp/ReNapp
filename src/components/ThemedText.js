import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../theme';
import { Text } from 'react-native-elements';

const colorTypes = [ 'primary', 'inverse', 'secondary' ];

class ThemedText extends React.Component {
  render(){
    const { style, color, ...rest } = this.props
    return(
      <ThemeConsumer>
        {
          (props) => (
            <Text 
              style={[{
                color: !colorTypes.includes(color) ?
                 props.theme.colors.text.base :
                 props.theme.colors.text[color]
              }, {...style}]} 
              {...rest} 
            />
          )
        }
      </ThemeConsumer>
    )
  }
}

export default ThemedText;