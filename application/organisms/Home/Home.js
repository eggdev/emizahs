import React from 'react';
import {Text, View} from 'react-native';

import Grid from '../../atoms/Grid';
import RecordButton from '../../molecules/RecordButton';

const Home = () => {
  return (
    <View style={{flex: 1, minHeight: '100%'}}>
      <Grid justify="center" fullHeight align="center"></Grid>
    </View>
  );
};

export default Home;
