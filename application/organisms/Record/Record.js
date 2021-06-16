import React, {useState} from 'react';
import {Platform, Text, View} from 'react-native';

import Grid from '../../atoms/Grid';
import RecordButton from '../../molecules/RecordButton';

import {
  Player,
  Recorder,
  MediaStates,
} from '@react-native-community/audio-toolkit';

const Record = () => {
  const filename = 'test.mp4';
  const recorder = new Recorder(filename);
  recorder.prepare((...all) => {
    console.log(all);
  });

  const [recordStats, setRecordStats] = useState({});
  const [isRecording, setIsRecording] = useState(false);

  const startRecord = async () => {
    console.log(recorder.canRecord);
    console.log(recorder.canPrepare);
    // const res = await recorder.record();
    // console.log(res);
  };

  const onStopRecord = async () => {};

  return (
    <View style={{flex: 1, minHeight: '100%'}}>
      <Grid justify="center" fullHeight align="center">
        <RecordButton startRecord={startRecord} endRecord={onStopRecord} />
      </Grid>
    </View>
  );
};

export default Record;
