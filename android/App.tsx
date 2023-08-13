/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <StatusBar backgroundColor="#FF33FF" />

      {isLoading && (
        <View style={[styles.loaderContainer, {width, height}]}>
          <Text style={styles.loader}>Loading...</Text>
          <ActivityIndicator color="#FF33FF" />
        </View>
      )}

      <WebView
        source={{uri: 'https://shamim-islam.vercel.app/'}}
        style={{flex: 1}}
        onLoadEnd={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          setIsLoading(nativeEvent.loading);
        }}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  loaderContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loader: {
    fontWeight: '700',
    fontSize: 16,
    color: '#FF33FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
