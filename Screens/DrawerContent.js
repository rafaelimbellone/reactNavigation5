import React, {useState, useContext} from 'react';

import {View, StyleSheet, } from 'react-native';
import {
        useTheme,
        Avatar,
        Title, 
        Caption,
        Paragraph, 
        Drawer, 
        Text,
        TouchableRipple,
        Switch}
    from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import userImage from '../Assets/avatar.png';
import { AuthContext } from '../Components/Context';

export function DrawerContent(props){
    
    const { signOut, toggleTheme } = useContext(AuthContext);
    const paperTheme = useTheme();
   
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  <View style={styles.userInfoSelection}>
                    <View style={{flexDirection:'row', marginTop:15 }}>
                        <Avatar.Image source={userImage} size={50}/>
                        <View style={{marginLeft:15 }}>
                            <Title style={styles.title}>Rafael Imbellone</Title>
                            <Caption style={styles.caption}>@imbellone</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                         <View style={styles.section}>
                             <Paragraph style={[styles.paragrapf, styles.caption]}>80</Paragraph>
                             <Caption style={styles.caption}>Segue</Caption>
                         </View>
                         <View style={styles.section}>
                             <Paragraph style={[styles.paragrapf, styles.caption]}>180</Paragraph>
                             <Caption style={styles.caption}>Seguidores</Caption>
                         </View>
                    </View>
                  </View>
                  <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon name='home-outline' color={color} size={size}/>
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon name='account-outline' color={color} size={size}/>
                        )}
                        label='Profile'
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon name='bookmark-outline' color={color} size={size}/>
                        )}
                        label='Bookmark'
                        onPress={() => {props.navigation.navigate('BookMarkScreen')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon name='settings-outline' color={color} size={size}/>
                        )}
                        label='Settings'
                        onPress={() => {props.navigation.navigate('SettingScreen')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon name='account-check-outline' color={color} size={size}/>
                        )}
                        label='Support'
                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                    />
                  </Drawer.Section>
                  <Drawer.Section title='Preferences'>                      
                      <TouchableRipple onPress={() => {toggleTheme()}}>
                          <View style={styles.preference}>
                              <Text>Dark Theme</Text>
                              <View pointerEvents='none'>
                                <Switch value={paperTheme.dark}/>
                              </View>                              
                          </View>
                      </TouchableRipple>
                  </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon name='exit-to-app' color={color} size={size}/>
                    )}
                    label='Sign Out'
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );

}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSelection:{
       marginTop:6,
       paddingLeft:20,
    },
    title:{
      fontSize:16,
      marginTop:3,
      fontWeight:'bold',
    },
    caption:{
      fontSize:14,
      lineHeight:14,
    },
    row:{
      marginTop:20,
      flexDirection:'row',
      alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragrapf:{
      fontWeight:'bold',
      marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginTop:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }

});