import  React from 'react';
import { View, Text, Button, StyleSheet,  } from 'react-native';
const SettingScreen = ({ navigation }) =>{
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
         <Text>Setting screem</Text>
         <Button style = {styles.Button} title='Click Here' 
                 onPress={() => alert('Button Clicked')}/>
      </View> 
    )
  }
  const styles = StyleSheet.create({
    Button:{
      margin:10,
      
    }
  })
  export default SettingScreen;