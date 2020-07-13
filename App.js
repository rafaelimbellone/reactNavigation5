
import React, {useState, useEffect, useMemo, useReducer} from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import {NavigationContainer, 
       useTheme,
       DefaultTheme as NavigationDefaultTheme, 
      DarkTheme as NavigationDarkTheme,
    } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import SupportScreen from './Screens/SupportScreen';
import SettingScreen from './Screens/SettingScreen';
import BookMarkScreen from './Screens/BookMarkScreen';
import RootStackScreen from './Screens/RootStackScreen';
import {AuthContext} from './Components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider as PaperProvider, 
        DarkTheme as PaperDarkThene,
        DefaultTheme as PaperDefaultTheme,
      } from 'react-native-paper';
import {DrawerContent} from './Screens/DrawerContent';
import { View } from 'react-native-animatable';

StatusBar.setBackgroundColor("#009387");
StatusBar.setBarStyle("light-content");


const Drawer = createDrawerNavigator();


const App = () =>  {
 // const [isLoading, setIsLoading] = useState(true);
 // const [userToken, setUsertoken] = useState(null);

 //usado para o darke thema
 const [isDarkTheme, setIsDarkTheme] = useState(false);
 const initialLoginState = {
   isLoading: true,
   userName: null,
   userToken: null,
 };

 //usado para o darke thema
 const CustomDefaultTheme = {
   ...NavigationDefaultTheme,
   ...PaperDefaultTheme,
   colors:{
     ...NavigationDefaultTheme.colors,
     ...PaperDefaultTheme.colors,
     BackgroundColor:'#ffffff',
     text:'#333333',
   }
 }
//usado para o darke thema
 const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkThene,
  colors:{
    ...NavigationDarkTheme.colors,
    ...PaperDarkThene.colors,
    BackgroundColor:'#333333',
    text:'#ffffff',
  }
}
//usado para o darke thema
const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

 const loginReducer = (prevState, action) => {
   switch(action.type){
     case 'RETRIEVE_TOKEN':  
        return{
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
    case 'LOGIN':  
       return{...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading:false,};
    case 'LOGOUT':  
       return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading:false,
       };
    case 'REGISTER':  
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
   }
 }

 const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  //função 
  const authContext = useMemo(() => ({
      // se a opção for signIn.
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        //verifica se a senha são iguais. se sim cria um user token e grava no asyncStorage.
        if(userName == 'rafael' && password == 'rafael321'){
          try{
            userToken = 'dfgffhjr';
            await AsyncStorage.setItem('userToken', userToken);
          }catch(e){
            console.log(e);
          }          
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      // se a opção for signOut desloga e exclui do asyncStorage o token do usuario.  
      signOut: async () => {
        try{
          await AsyncStorage.removeItem('userToken');
        }catch(e){
          console.log(e);
        }  
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        //setIsLoading(false);
        //setUsertoken('fgky');
      },
      //usado para o darke thema
      toggleTheme: () =>{
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      }
  }), []);

  useEffect(() =>{
     setTimeout(async () => {
       let userToken;
       userToken = null;
      try{
        userToken  = await AsyncStorage.getItem('userToken');        
      }catch(e){
        console.log(e);
      }    
      console.log(userToken);
      dispatch({type: 'REGISTER', token: userToken})
     }, 1000)
  },[]);

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={theme}>
            {loginState.userToken != null ? (
              <Drawer.Navigator drawerContent = { props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />  
              <Drawer.Screen name="SupportScreen" component={SupportScreen} /> 
              <Drawer.Screen name="SettingScreen" component={SettingScreen} /> 
              <Drawer.Screen name="BookMarkScreen" component={BookMarkScreen} />        
            </Drawer.Navigator>
            ) : <RootStackScreen />}
            
          </NavigationContainer> 
      </AuthContext.Provider>
    </PaperProvider>
  )
}

export default App;
