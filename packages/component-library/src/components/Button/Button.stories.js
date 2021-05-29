import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button from '.';

storiesOf('Button', module).add('color types', () => (
  <>
    <Button onPress={action('clicked-info')} label="Info" color="info" />
    <Button
      onPress={action('clicked-primary')}
      label="Primary"
      color="primary"
    />
    <Button
      onPress={action('clicked-success')}
      label="Success"
      color="success"
    />
    <Button
      onPress={action('clicked-warning')}
      label="Warning"
      color="warning"
    />
    <Button onPress={action('clicked-error')} label="Error" color="error" />
  </>
));
