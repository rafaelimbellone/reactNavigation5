import  React,{useState} from 'react';
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

const SignInScreen = ({ navigation }) => {
   
    const [data, setData] = useState({
        email:'',
        passoword:'',
        confirmedPassword: '',
        checkTextInputChange: false,
        secureTextEntry:true,
        confirmSecureTextEntry:true,
    });

    //função para exibir o icone de check do lado do email
    const textInputChange = (val) => {
        if(val.length == 0 ){            
            setData({
                ...data,
                email:val,
                checkTextInputChange: false,
            });
        }else{
            setData({
                ...data,
                email:val,
                checkTextInputChange: true,
            });
        }
    }
    
    const handlePassowordChange = (val) =>{
        setData({
            ...data,
            passoword:val,
        });
    }
    const handleConfirmPassowordChange = (val) => {
        setData({
            ...data,
            confirmedPassword:val,
        });
    }
    //função para exibir a senha
    const updateSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }
    const updateConfirmSecureEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry,
        })
    }

    return(
      <View style={styles.container}>
         <View style={styles.header}>
             <Text style={styles.textHeader}>Faça seu Cadastro!</Text>
         </View>
         <Animatable.View style={styles.footer} animation='fadeInUpBig'>
             <Text style={styles.textFooter}>Email</Text>
             <View style={styles.action}>
               <FontAwesome name='user-o' color='#05375a' size={20}/>
               <TextInput 
                   placeholder= 'Digíte seu Email' 
                   style={styles.textInput}
                   autoCapitalize='none'
                   onChangeText={(val) => textInputChange(val)}
                />
                {data.checkTextInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <FontAwesome name='check-circle' color='green' size={20}/>
                    </Animatable.View>
                : null}
             </View>
             <Text style={[styles.textFooter, {marginTop:20}]}>Senha</Text>
             <View style={styles.action}>
               <FontAwesome name='lock' color='#05375a' size={20}/>
               <TextInput 
                   placeholder= 'Digíte sua Senha' 
                   secureTextEntry= { data.secureTextEntry ? true : false }
                   style= { styles.textInput }
                   autoCapitalize='none'
                   onChangeText={(val) => handlePassowordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureEntry}>
                 {data.secureTextEntry ? <FontAwesome name='eye-slash'  size={20}/>
                                       : <FontAwesome name='eye'  size={20}/>
                 }
                </TouchableOpacity>
             </View>
             <Text style={[styles.textFooter, {marginTop:20}]}>Confirmar Senha</Text>
             <View style={styles.action}>
               <FontAwesome name='lock' color='#05375a' size={20}/>
               <TextInput 
                   placeholder= 'Confirmar Senha' 
                   secureTextEntry= { data.confirmSecureTextEntry ? true : false }
                   style= { styles.textInput }
                   autoCapitalize='none'
                   onChangeText={(val) => handleConfirmPassowordChange(val)}
                />
                <TouchableOpacity onPress={updateConfirmSecureEntry}>
                 {data.confirmSecureTextEntry ? <FontAwesome name='eye-slash'  size={20}/>
                                       : <FontAwesome name='eye'  size={20}/>
                 }
                </TouchableOpacity>
             </View>
             <View style={styles.button}>
               <LinearGrandient style={styles.signIn} colors={['#08d4c4', '#01ab9d']}>
                 <Text style={[styles.textSign, {color:'#fff'}]}>Entar</Text>
               </LinearGrandient>
               <TouchableOpacity style={[styles.signIn, 
                                        {borderColor:'#009387', 
                                        borderWidth:1, 
                                        marginTop:4}]}
                onPress={() => navigation.goBack()}>
                   <Text style={[styles.textSign, {color:'#009387'}]}>Sign In</Text>
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
        flex:7,
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
       marginTop:20,
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
  })
  export default SignInScreen;