import { StyleSheet, Text, View, SafeAreaView as SV, Image, TextInput as TI, Pressable, Modal, TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

const Home = () => {
  const navigation = useNavigation();

  function loginPage(){
    navigation.navigate('login');

  }
  return (
    <ImageBackground source={require('../assets/ChainGuard/bg.png')} style={styles.backgroundImage}>
       <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* Replace 'logo.png' with the path to your logo image */}
          <Image source={require('../assets/ChainGuard/output-onlinepngtools(3).png')} style={styles.logo} />
        </View>


        <View style={{justifyContent:'center'}}>
          <Text style={{color:'white',fontSize:40,fontWeight:600,textAlign:'center'}}>ChainGuard</Text>
          <Text style={{color:'white',fontSize:10,fontWeight:600,textAlign:'center'}}>Forensic Ecellence. Digital Precision.</Text>

        </View>

        
        <View style={{justifyContent:'center',marginTop:50,marginBottom:50}}>
          <Text style={{color:'white',fontSize:50,fontWeight:300,textAlign:'center'}}>WELCOME</Text>

        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => loginPage()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    marginTop:-0
  },
  logo: {
    width: 220, // Set the width of your logo
    height: 220, // Set the height of your logo
    borderRadius: 50, // To make it a circular image, half of the width or height
  },
  loginButton: {
    backgroundColor: '#FFC300',
    padding: 15,
    borderRadius: 30,
    width:250
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center'
  },
});

export default Home;
