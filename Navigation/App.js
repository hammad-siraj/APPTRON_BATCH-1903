
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppContainer } from './navigation/navigation';
import TABA from './gradle/components/tab_a';



export default class App extends Component {
  render() {
    return (

      <AppContainer/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
