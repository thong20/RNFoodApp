import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './src/RootStack'

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
