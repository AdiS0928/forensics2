import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Biometric = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here
    // alert(`Username: ${username}\nPassword: ${password}`);
   
    navigation.navigate('otp');
    
    
  };

  return (
    <ImageBackground source={require('../assets/ChainGuard/bg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/ChainGuard/output-onlinepngtools(3).png')} style={styles.logo} />
        </View>

        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: '600', textAlign: 'center' }}>ChainGuard</Text>
          <Text style={{ color: 'white', fontSize: 10, fontWeight: '600', textAlign: 'center' }}>Forensic Excellence. Digital Precision.</Text>
        </View>

        <View style={{ justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
          <Image style={{height: 200, width: 200}} source={require('../assets/ChainGuard/image-removebg-preview.png')}  />
        </View>

        {/* Username Input */}
        

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log on with Biometrics</Text>
          <Text style={styles.loginButtonText}>Please scan your biometric to continue</Text>

        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 0,
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 50,
  },
  loginButton: {
    backgroundColor: '#FFC300',
    padding: 15,
    borderRadius: 30,
    width: 250,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFC300',
    marginTop: 10,
    width:250
  },
  input: {
    height: 40,
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
    
  },
});

export default Biometric;
