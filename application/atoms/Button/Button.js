import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Pressable} from 'react-native';

const Button = ({children, ...rest}) => (
  <Pressable {...rest}>{children}</Pressable>
);

Button.propTypes = {
  children: PropTypes.object,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
