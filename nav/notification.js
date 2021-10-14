import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Notification'
    }
    render(){
      return <View style={
      {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
       wrapText:true
      }
    }>

    <Image 
style={{width: 160, height: 180, marginTop:50, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 25, color: '#55ACEE'}}>
    All Notification are loaded in this section
    </Text>
        </View>  
    }}
