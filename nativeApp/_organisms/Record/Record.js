import React from 'react';
import {View} from 'react-native';

import Grid from '../../_atoms/Grid';
import RecordButton from '../../_molecules/RecordButton';

const Record = () => {
  const startRecord = () => {
    console.log('startRecord');
  };

  const endRecord = () => {
    console.log('endRecord');
  };
  return (
    <View style={{flex: 1, minHeight: '100%'}}>
      <Grid justify="center" fullHeight align="center">
        <RecordButton startRecord={startRecord} endRecord={endRecord} />
      </Grid>
    </View>
  );
};

export default Record;
