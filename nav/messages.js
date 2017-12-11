import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'DM'
    }
    render(){
      return (
<View style={
      {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }
    }>


    <Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 30, color: '#55ACEE'}}>
    All Direct Messages are found here
    </Text>
        </View>  
   ); }}
