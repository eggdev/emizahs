import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import StorybookUI from './storybook';

export {default as Button} from './src/components/Button';

registerRootComponent(StorybookUI);
