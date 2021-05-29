import React from 'react';
import PropTypes from 'prop-types';
import {View as RNView} from 'react-native-ui-lib';
/**
 *  View Component
 */
const View = ({
  align = 'start',
  height = 'auto',
  justify = 'start',
  ...props
}) => (
  <RNView
    {...props}
    style={{
      display: 'flex',
      justifyContent: justify,
      alignItems: align,
      height: `${height}${height === 'auto' ? '' : '%'}`,
    }}
  />
);

View.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  height: PropTypes.number,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
};

export default View;
