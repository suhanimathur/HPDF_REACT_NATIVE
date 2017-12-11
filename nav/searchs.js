import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {SearchBar} from 'react-native-elements';
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Find'
    }
    render(){
      return(
 <View>
<View style={{justifyContent:'center',marginTop:20}}>
<SearchBar
	 style={{backgroundColor:'white',marginTop:30}}
  lightTheme
  	placeholder='Search Twitter' />
</View>
<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: '#55ACEE',marginTop:60}}>
    This is  your Searchbar
    </Text>
</View>
        </View>  
    );}}
