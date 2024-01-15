import { StyleSheet, Text, View, SafeAreaView as SV, Image, TextInput as TI,  Pressable} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Picture from './screen/picture';
import Biometric from './screen/biometric';
import Home from './screen/home';
import Gallery from './screen/gallery';
import Login from './screen/login';
import OTP from './screen/otp';


// import MyTabs from './screens/'
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
 

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator> 
        <>

        <Stack.Screen  
            name='home'
            component={Home}
            options={{headerShown:false}}
          />


          <Stack.Screen  
            name='login'
            component={Login}
            options={{headerShown:false}}
          />


          <Stack.Screen  
            name='biometric'
            component={Biometric}
            options={{headerShown:false}}
          />

          <Stack.Screen  
            name='otp'
            component={OTP}
            options={{headerShown:false}}
          />

          <Stack.Screen  
            name='picture'
            component={Picture}
            options={{headerShown:false}}
          />

          <Stack.Screen  
            name='gallery'
            component={Gallery}
            options={{headerShown:false}}
          />

     
        </>

      </Stack.Navigator>


    </NavigationContainer>  
  );
}