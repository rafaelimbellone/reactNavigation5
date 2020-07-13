
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const DetailScrem = ({ navigation }) =>{
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
         <Text>Details Screm</Text>
         <Button style = {styles.Button} title='Go to Details Screem...again ' 
                 onPress={() => navigation.push('Details')} />
        <Button style = {styles.Button} title='Go to Home ' 
                 onPress={() => navigation.navigate('Home')} />
        <Button style = {styles.Button} title='Go Back ' 
                 onPress={() => navigation.goBack()} />
        <Button style = {styles.Button} title='Go to the first screem ' 
                 onPress={() => navigation.popToTop()} />
      </View> 
    )
  }
  const styles = StyleSheet.create({
    Button:{
      margin:10,
      
    }
  })
  export default DetailScrem;