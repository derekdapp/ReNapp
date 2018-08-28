import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../theme';
import { Text } from 'react-native-elements';

class ThemedText extends React.Component {
  render(){
    const { type = "primary", disabled  } = this.props
    return(
      <ThemeConsumer>
        {
          (props) => (
            <Text 
              style={{
                color: props.theme.colors.text.base
              }} 
              {...this.props} 
            />
          )
        }
      </ThemeConsumer>
    )
  }
}

export default ThemedText;