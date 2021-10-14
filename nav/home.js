import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}
        style={{width:20,height:20,tintColor:'white'}}>
        </Image>
    ),
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
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 30, color: '#55ACEE'}}>
    Your Twitter feed. Please Tweet.
    </Text>
        </View>  
    }}
