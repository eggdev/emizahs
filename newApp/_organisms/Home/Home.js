import React from 'react';
import {Text, View} from 'react-native';

import Grid from '../../_atoms/Grid';
import RecordButton from '../../_molecules/RecordButton';

const Home = () => {
  return (
    <View style={{flex: 1, minHeight: '100%'}}>
      <Grid justify="center" fullHeight align="center"></Grid>
    </View>
  );
};

export default Home;
