import React, { Component } from 'react'
import { Text, View ,StyleSheet ,TouchableOpacity} from 'react-native'

const Screens =[{
    name:'HOME'
},{
    name:'ABOUT'
},{
    name:'SETTINGS'
}]

export default class ScreenList extends Component {



renderItem =(screen,index)=>{
    return(
    
<TouchableOpacity key={index} onPress={()=>{this.props.navigation.navigate('SCREEN',{
    Screen:screen.name
})}}>


<Text> {screen.name}</Text>

</TouchableOpacity>
    )

}



    render() {
    return (
      <View style={styles.container}>
{Screens.map(this.renderItem)}

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
});