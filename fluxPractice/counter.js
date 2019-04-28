import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import {connect} from 'react-redux'
import { increment, decrement } from './REDUX/actionCreater';


const mapStateToProps =(state)=>({
counter:state.counter

})

const mapDispatchToProps =(dispatch)=>({
    increment:()=>{dispatch(increment())},
    decrement:()=>{dispatch(decrement())}
})

 class Counter  extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>


          <Button title='ADD' onPress={this.props.increment}></Button>
          <Text></Text>
          <Button title='SUB' onPress={this.props.decrement}></Button>

        <Text style={{fontSize:20}}> COUNTER  {this.props.counter}</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)