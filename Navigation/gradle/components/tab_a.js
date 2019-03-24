import React, { Component } from 'react'
import { Text, View, StyleSheet,Button } from 'react-native'

export default class TABA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> TAB A </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'orange'


    }
})