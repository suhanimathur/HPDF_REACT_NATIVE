import React from 'react';
import { Font } from 'expo';
import {Text,Image,View,TouchableOpacity, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container,  Left, Body, Right, Button, Icon, Title,Thumbnail } from 'native-base';
import SearchBar from 'react-native-searchbar';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class first extends React.Component{




	static navigationOptions={
		tabBarLabel: 'Profile',
		drawerIcon: ({tintColor})=> {
			return (

				<MaterialIcons
				name="person"
				size={24}
				style={{color: tintColor}}
				>
				</MaterialIcons>
				);
		}

	}
	
	
	render(){
 return <View>
      
<View style={{flex:1}}>
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/></View>

		<View style={
			{
			flex: 3,
			marginTop: 300,
			justifyContent: 'center',
			alignItems: 'center',
			wrapText:true
			}
		}>

		<Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
		<Text style={{fontSize: 20, color: '#FFFFF', textAlign: 'center'}}>
		Profile Section
		</Text>
		</View>
		</View>

	}
}
