import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Inbox'
    }
    render(){
      return (
<View style={
      {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
        wrapText:true
      }
    }>


    <Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 20, color: '#55BCEE'}}>
    Direct Message Component
    </Text>
        </View>  
   ); }}
