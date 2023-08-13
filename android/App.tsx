/* eslint-disable react-native/no-inline-styles */
import {StatusBar} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FF33FF" />
      <WebView
        source={{uri: 'https://shamim-islam.vercel.app/'}}
        style={{flex: 1}}
      />
    </>
  );
};

export default App;
