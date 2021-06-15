import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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

const RecordButton = () => {
  const style = makeStyles();
  const [pressed, setPressed] = useState(false);

  const startRecord = () => {
    console.log('onPress');
    setPressed(true);
  };

  const endRecord = () => {
    console.log('onPressOut');
    setPressed(false);
  };

  return (
    <Button
      onPressIn={startRecord}
      onPressOut={endRecord}
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

export default RecordButton;
