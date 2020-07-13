import  React from 'react';
import { View, 
         Text,
         TouchableOpacity, 
         Image,
         StyleSheet,
         Dimensions,
      } from 'react-native';
import logo from '../Assets/logo.png';
import LinearGrandient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native'

const SplashScreen = ({ navigation }) =>{
    const { colors } = useTheme();
    return(
      <View style={styles.container}>
         <View style={styles.header}>
             <Animatable.Image 
                 animation='bounceIn'
                 duration={1500}
                 style={styles.logo} 
                 source={logo} 
                 resizeMode='stretch'
            />
         </View>
        <Animatable.View animation='fadeInUpBig' duration={1500} 
                   style={[styles.footer, {backgroundColor: colors.background}]}
        >
             <Text style={[styles.title,{color:colors.text}]}>Fique Conectado!</Text>
             <Text style={[styles.text, {color:colors.text}]}>Faça seu Login.</Text>
             <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                    <LinearGrandient style={styles.signIn} colors={['#08d4c4', '#01ab9d']}>
                      <Text style={styles.textSign}>Começar</Text>
                      <MaterialIcons name='navigate-next' color='#fff' size={20}/>
                    </LinearGrandient>
                </TouchableOpacity>
             </View>
        </Animatable.View>
      </View> 
    )
  }

  const {height} = Dimensions.get('screen');
  const height_logo = height * 0.28;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'#009387'
      },
      header:{
          flex:2,
          justifyContent:'center',
          alignItems:'center'
      },
      footer:{
          flex:1,
          backgroundColor:'#fff',
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          paddingVertical:50,
          paddingHorizontal:50,
      },
      logo:{
          width:height_logo,
          height:height_logo,
      },
      title:{
          color:'#05375a',
          fontSize:30,
          fontWeight:'bold',
      },
      text:{
          color:'grey',
          marginTop:5,
      },
      button:{
          alignItems:'flex-end',
          marginTop:30
      },
      signIn:{
          width:150,
          height:40,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:50,
          flexDirection:'row',
      },
      textSign:{
          color:'white',
          fontWeight:'bold',
      },      
  });
  export default SplashScreen;