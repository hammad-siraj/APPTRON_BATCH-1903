
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';
import * as firebase from 'firebase'


export default class App extends Component {
  constructor(){
    super();
    this.state={
      email:""
    }
  }

  writeData =()=>{
var db = firebase.database();
db.ref(`/userDetail`).push({
  email:this.state.email
})

  }

readData =()=>{
  var db =firebase.database();
  db.ref('/userDetail').on("value",(snapshot)=>{
    console.log(snapshot.val());

  })
}

updateData= ()=>{
firebase.database().ref('/userDetail/-LdXutZkVq1Nu8KOFJ-Z').update(
  {
    email:"new user 2"
  }
)

}

deleteData =()=>{
  firebase.database().ref('/userDetail/-LdXutZkVq1Nu8KOFJ-Z').remove();
}


  render() {
console.log("firebase",firebase.app())
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
<TextInput 
name='email'
placeholder='enter email'
onChangeText={(text)=>{this.setState({email:text})}}

/>
        <Button title='send' onPress={this.writeData}></Button>
        <Text></Text>
      <Button title="read" onPress={this.readData}></Button>
      <Text></Text>
      <Button title="update"onPress={this.updateData} ></Button>
      <Text></Text>
      <Button title="DELETE" onPress={this.deleteData}></Button>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
