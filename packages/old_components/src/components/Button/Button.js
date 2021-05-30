import React from 'react';
import PropTypes from 'prop-types';
import {Button as GButton} from 'galio-framework';
/**
 *  Button Component
 */
const Button = ({
  label = 'Button',
  onPress = () => {},
  color = 'primary',
  ...props
}) => {
  const buttonStyles = [];
  return (
    <GButton onPress={onPress} style={buttonStyles} color={color} {...props}>
      {label}
    </GButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'theme',
    'error',
    'warning',
    'success',
    'transparent',
    'info',
  ]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
