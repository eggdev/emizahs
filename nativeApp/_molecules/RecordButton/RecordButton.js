import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../_atoms/Button';

const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      height: 250,
      width: 250,
      borderRadius: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerButton: {
      height: 100,
      width: 100,
      borderRadius: 100,
      backgroundColor: '#c00',
    },
  });

const RecordButton = ({startRecord, endRecord}) => {
  const style = makeStyles();
  const [pressed, setPressed] = useState(false);
  const onPressIn = () => {
    setPressed(true);
    startRecord();
  };

  const onPressOut = () => {
    endRecord();
    setPressed(false);
  };

  return (
    <Button
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{
        ...style.container,
        ...(pressed && {
          opacity: 0.5,
        }),
      }}
    >
      <View style={style.innerButton} />
    </Button>
  );
};

RecordButton.propTypes = {
  startRecord: PropTypes.func,
  endRecord: PropTypes.func,
};

export default RecordButton;
