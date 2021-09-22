import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableHighlight } from 'react-native';

export default function App() {

 
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => console.log('Text clicked')}>Today we are building some apps on react native</Text>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={() => console.log('helooo')}>
      <Image fadeDuration={1000} source={{width: 200, height: 300, uri: 'https://picsum.photos/200/300'}}/ >
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});































































































