import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Button from './src/components/Button';
import View from './src/components/View';

const App = () => {
  const onPress = () => {
    console.log('here');
  };
  return (
    <View justify="center" align="center" height={100}>
      <StatusBar style="auto" />
      <Button label="Button" onPress={onPress} />
    </View>
  );
};

export default App;
