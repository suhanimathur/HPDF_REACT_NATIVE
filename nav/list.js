import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class second extends React.Component{
	static navigationOptions={
		tabBarLabel: 'Lists',
		drawerIcon: ({tintColor})=> {
			return (
				<MaterialIcons
				name="list"
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
  centerComponent={{ text: 'Lists', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/></View>

		<View style={
			{
			flex: 3,
			marginTop: 300,
			justifyContent: 'center',
			alignItems: 'center'
			}
		}>

		<Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
		<Text style={{fontSize: 30, color: '#55ACEE', textAlign: 'center'}}>
		List tab
		</Text>
		</View>
		</View>

	}
}
