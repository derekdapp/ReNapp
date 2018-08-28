import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../theme';
import { Button } from 'react-native-elements';

class ThemedButton extends React.Component {
  render(){
    const { type = "primary", disabled  } = this.props
    return(
      <ThemeConsumer>
        {
          (props) => (
            <Button 
              backgroundColor={props.theme.colors[type]} 
              disabledStyle={{
                backgroundColor: props.theme.colors.disabled
              }}
              color={
                this.props.transparent ?
                props.theme.colors.primary
                :
                ''
              }
              {...this.props} 
            />
          )
        }
      </ThemeConsumer>
    )
  }
}

ThemedButton.propTypes = {
  type: PropTypes.oneOf(
    [
      null, 
      'primary', 
      'success', 
      'danger', 
      'warning'
    ]
  )
}

export default ThemedButton;