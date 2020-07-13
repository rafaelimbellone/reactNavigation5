
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetaisScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => {
  return(      
        <Tab.Navigator
            initialRouteName="Home"                     
            activeColor="#fff"                
        >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Icon  name="home" color={color} size={26}/>
                )
             }}
        />
        <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Details',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Icon name= 'notifications' color={color} size={26}/>
                )
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Icon  name="person" color={color} size={26}/>
                )
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Icon name="settings" color={color} size={26}/>
                )
            }}
        />
        </Tab.Navigator>
        
    )
 }

const HomeStackScreen = ({navigation}) => {
    return(
        <HomeStack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}>
          <HomeStack.Screen 
                 name= 'Home' component={HomeScreen} 
                 options={{
                            title:'Overview',
                            headerLeft:() => (     
                              <Icon.Button name="reorder" size={25} 
                                backgroundColor='#009387'
                                onPress={() =>{
                                  navigation.openDrawer()
                                }}
                              ></Icon.Button>
                            )        
          }}/>
        </HomeStack.Navigator>
    )
  }
  
  const DetailsStackScreen = ({navigation}) => {
    return(
        <DetailsStack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}>
          <DetailsStack.Screen name= 'Details' component={DetailsScreen} 
                            options={{
                                 title:'Overview',
                                 headerLeft:() => (     
                                    <Icon.Button name="reorder" size={25} 
                                                backgroundColor='#009387'
                                                onPress={() =>{
                                                  navigation.openDrawer()
                                                }}
                                    />
                                 )        
                             }}
          />
        </DetailsStack.Navigator>
    )
  }
  export default MainTabScreen;