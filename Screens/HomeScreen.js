

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'

const HomeScrem = ({ navigation }) =>{
  const { colors } = useTheme();
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
         <Text style={{color: colors.text}}>Home Screm</Text>
         <Button title='Go to Details Screem ' 
                 onPress={() => navigation.navigate('Details')} />
      </View> 
    )
  }
  export default HomeScrem;
  