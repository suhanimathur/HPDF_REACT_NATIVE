/*
Sachin Mathur
*/

import React,{Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import SearchBar from 'react-native-searchbar';
import {TabNavigator,DrawerNavigator} from 'react-navigation';
import profile from './nav/profile';
import list from './nav/list';
import moments from './nav/moments';
import highlight from './nav/highlight';
import setting from './nav/setting';
import help from './nav/help';
import home from './nav/home';
import searchs from './nav/searchs';
import notification from './nav/notification';
import messages from './nav/messages';

console.log('Hello World');


const ScreenNavigator= TabNavigator({
    tab1:{screen:home},
    tab2:{screen:notification},
    tab3:{screen:messages},
    tab4:{screen:search}
  },{
    tabBarPosition:'left',
    swipeEnabled:false,
    tabBarOptions:{
      activeTintColor:'white',
      activeBackgroundColor:'gray',
      inactiveTintColor:'blue',
      inactiveBackgroundColor:'green',
      labelStyle:{
        fontSize:16,
        padding:0}

      }
    }
  );
  ScreenNavigator.navigationOptions={
    
    tabBarLabel: 'Timeline',
    drawerIcon: ({tintColor})=> {
      return (

        <MaterialIcons
        name="Home"
        size={20}
        style={{color: tintColor}}
        >
        </MaterialIcons>
        );
    }
  };

class HomeScreen extends Component {
  console.log("Welcome");
  //console.log("Test);
  render(){
    return(
      
// console.log("TEST");

<View style={{ flex: 1, marginTop: 2 }}>
    
    <SearchBar
    ref={(ref) => this.searchBar = ref}
          showOnLoad
          placeholder='Search..'/>

    <View style={
      {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
      }
    }>

    <Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 30, color: '#55ACEE', textAlign: 'center'}}>
    Info about The user is displayed here 
    
     "User Profile "

    </Text>
    
    </View>
    </View>
    
      );
  }
  static navigationOptions = {
    drawerLabel: 'Sachin Mathur',
    drawerIcon: ()=> (
      <Image 
style={{flex: 1,width: 50, height: 50, borderRadius: 100, marginTop:30, marginBottom: 30,alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/780399323343298561/u6OgtuBD_bigger.jpg'}}/>
    ),
  };

 
}

const Draw = DrawerNavigator(
  
{

  Info:{
    screen:HomeScreen
},
  Home: {
    screen:ScreenNavigator,
  },
  Profile: {
    path: '/',
    screen: profile,
  },
  Lists: {
    path: '/sent',
    screen: list,
  },
  
  Moments: {
    path: '/',
    screen: moments,
  },
  
  Highlights: {
    path: '/',
    screen: highlight,
  },
  
  Settings : {
    path: '/',
    screen: setting,
  },
  
  Help : {
    path: '/',
    screen: help,
  },
},
{
    initialRouteName: 'Info',
    drawerPosition: 'left'

}

  );


export default Draw;

