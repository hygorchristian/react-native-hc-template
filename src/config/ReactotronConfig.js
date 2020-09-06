/* eslint-disable no-console */

import url from 'url';
import { NativeModules } from 'react-native';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

if (__DEV__) {
  const tron = Reactotron.configure({
    host: hostname,
    name: 'React Native App',
  })
    .useReactNative({
      asyncStorage: false,
    })
    .use(sagaPlugin())
    .use(reduxPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  console.tron = console;
}
