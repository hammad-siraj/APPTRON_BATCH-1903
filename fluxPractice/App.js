import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Counter from './counter';
import {Provider} from 'react-redux'
import {configureStore} from './REDUX/configureStore'
const Store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <Counter/>
      </Provider>
    )
  }
}