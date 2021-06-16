import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

const makeStyles = ({pressed}) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      height: pressed ? 230 : 250,
      width: pressed ? 230 : 250,
      borderRadius: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: pressed ? 0.5 : 1,
    },
    innerButton: {
      height: pressed ? 95 : 100,
      width: pressed ? 95 : 100,
      borderRadius: 200,
      backgroundColor: '#c00',
    },
  });

const RecordButton = ({startRecord, endRecord}) => {
  const [pressed, setPressed] = useState(false);

  const style = makeStyles({pressed});

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
