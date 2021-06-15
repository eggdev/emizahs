import React from 'react';
import {View} from 'react-native';

import Grid from '../../_atoms/Grid';
import RecordButton from '../../_molecules/RecordButton';

const Record = () => {
  return (
    <View style={{flex: 1, minHeight: '100%'}}>
      <Grid justify="center" fullHeight align="center">
        <RecordButton />
      </Grid>
    </View>
  );
};

export default Record;
