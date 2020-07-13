import  React,{useState, useContext} from 'react';
import { View, 
         Text,
         Button,
         StyleSheet,
         TouchableOpacity, 
         Dimensions, 
         TextInput,
       } from 'react-native';
import LinearGrandient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import {AuthContext} from '../Components/Context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignInScreen = ({ navigation }) => {
    const {colors} = useTheme();
    const [data, setData] = useState({
        email:'',
        passoword:'',
        checkTextInputChange: false,
        secureTextEntry:true,
        isValidUser: true,
        isValidPasswor: true,
    });

    const { signIn } = useContext(AuthContext);

    //função para exibir o icone de check do lado do email
    const textInputChange = (val) => {
        if(val.trim().length == 0 ){            
            setData({
                ...data,
                email:val,
                checkTextInputChange: false,
                isValidUser:true,
            });
        }else if(val.trim().length <= 3 && val.trim().length >= 1){            
            setData({
                ...data,
                email:val,
                checkTextInputChange: false,
                isValidUser:false,
            });
        }else{
            setData({
                ...data,
                email:val,
                checkTextInputChange: true,
                isValidUser:true,
            });
        }
    }
    
    const handlePassowordChange = (val) =>{
        if(val.trim().length == 0){
            setData({
                ...data,
                passoword:val,
                isValidPasswor:true,
            });
        }else if(val.trim().length <= 5 ){            
            setData({
                ...data,
                passoword:val,
                isValidPasswor:false,
            });
        }else{
            setData({
                ...data,
                passoword:val,
                isValidPasswor:true,
            });
        }
    }
    
    //função para exibir a senha
    const updateSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const handleValidUser = (val) => {
        if(val.trim().length == 0){
            setData({
                ...data,
                isValidUser:true,
            })
        }else if(val.trim().length >= 4 ){
            setData({
                ...data,
                isValidUser:true,
            })
        }else{
            setData({
                ...data,
                isValidUser:false,
            }) 
        }
    }

    const loginHandle = (userName, password) => {
         signIn(userName, password);
    }

    return(
      <View style={styles.container}>
         <View style={styles.header}>
             <Text style={styles.textHeader}>Bem Vindo!</Text>
         </View>
         <Animatable.View style={[styles.footer,{backgroundColor:colors.background}]} animation='fadeInUpBig'>
             <Text style={[styles.textFooter, {color:colors.text}]}>Usuário</Text>
             <View style={styles.action}>
               <FontAwesome name='user-o' color={colors.text} size={20}/>
               <TextInput 
                   placeholder= 'Digíte o nome do Usuário' 
                   style={[styles.textInput, {color:colors.text}]}
                   autoCapitalize='none'
                   onChangeText={(val) => textInputChange(val)}
                   onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
                {data.checkTextInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <FontAwesome name='check-circle' color='green' size={20}/>
                    </Animatable.View>
                : null}
             </View>
             {data.isValidUser ? null : 
                 <Animatable.View animation='fadeInLeft' duration={500}>
                   <Text style={styles.errror}>Usuário deve conter no mínimo 4 caractéres.</Text>
                 </Animatable.View>
            }

             <Text style={[styles.textFooter, {marginTop:35, color:colors.text}]}>Passowrd</Text>
             <View style={styles.action}>
               <FontAwesome name='lock' color={colors.text} size={20}/>
               <TextInput 
                   placeholder= 'Digíte sua Senha' 
                   secureTextEntry= { data.secureTextEntry ? true : false }
                   style= {[styles.textInput,{color:colors.text} ]}
                   autoCapitalize='none'
                   onChangeText={(val) => handlePassowordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureEntry}>
                    {data.secureTextEntry ? <FontAwesome name='eye-slash' color={colors.text} size={20}/>
                                        : <FontAwesome name='eye' color={colors.text}  size={20}/>
                    }
                </TouchableOpacity>
             </View>
             {data.isValidPasswor ? null : 
                 <Animatable.View animation='fadeInLeft' duration={500}>
                   <Text style={styles.errror}>Senha deve conter no mínimo 6 caractéres.</Text>
                 </Animatable.View>
            }
             

             <View style={styles.button}>
               <TouchableOpacity style={styles.signIn} onPress={() => {loginHandle(data.email, data.passoword)}}>
                <LinearGrandient style={styles.signIn} colors={['#08d4c4', '#01ab9d']}>
                    <Text style={[styles.textSign, {color:'#fff'}]}>Entar</Text>
                </LinearGrandient>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.signIn, 
                                        {borderColor:'#009387', 
                                        borderWidth:1, 
                                        marginTop:15}]}
                onPress={() => navigation.navigate('SignUpScreen')}>
                   <Text style={[styles.textSign, {color:'#009387'}]}>Sign Up</Text>
               </TouchableOpacity>
             </View>
         </Animatable.View>
      </View> 
    )
  }
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:60,
    },
    footer:{
        flex:5,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    textHeader:{
       color:'#fff',
       fontWeight:'bold',
       fontSize:30,
    },
    textFooter:{
        fontSize:18,
        color:'#05375a',
    },
    action:{
      flexDirection:'row',
      marginTop:10,
      borderBottomWidth:1,
      borderBottomColor:'#f2f2f2',
      paddingBottom:5,
    }, 
    textInput:{
      flex:1,
      marginTop:-12,
      paddingLeft:10,
      color:'#05375a',
    }, 
    button:{
       alignItems:'center',
       marginTop:50,
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textSign:{
      margin:18,
      fontWeight:'bold',      
    },
    errror:{
        fontSize:12,
        fontWeight:'bold',
        color:'red',
    }
  })
  export default SignInScreen;