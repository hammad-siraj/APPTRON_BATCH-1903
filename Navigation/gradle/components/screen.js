import React, { Component } from 'react'
import { Text, View , StyleSheet,Button } from 'react-native'

export default class Screen extends Component {
    // static navigationOptions =({navigation})=>({
    //     title:this.props.navigation.state.params.name
    // })
  render() {
    return (
      <View style={styles.container}>
        <Text> {`I AM A screen ${this.props.navigation.state.params.Screen}`}  </Text>
<Button title='OPEN DRAWER' onPress={()=>{this.props.navigation.openDrawer()}}></Button>
<Button title='go back' onPress={()=>{this.props.navigation.goBack()}}></Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})