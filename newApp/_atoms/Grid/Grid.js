import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const getStyles = (props) =>
  StyleSheet.create({
    grid: {
      display: 'flex',
      flexDirection: props.direction,
      justifyContent: props.justify,
      alignItems: props.align,
      minHeight: props.fullHeight ? '100%' : 'auto',
    },
  });

const Grid = ({
  children,
  align = 'flex-start',
  direction = 'row',
  justify = 'flex-start',
  fullHeight = false,
  ...rest
}) => {
  const styles = getStyles({align, direction, justify, fullHeight});

  return (
    <View style={styles.grid} {...rest}>
      {children}
    </View>
  );
};

Grid.propTypes = {
  children: PropTypes.object,
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  direction: PropTypes.oneOf(['row', 'column']),
  fullHeight: PropTypes.bool,
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
};

export default Grid;
