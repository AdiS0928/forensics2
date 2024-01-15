import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';

const OTP = () => {
  const navigation = useNavigation();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  useEffect(() => {
    if (otp1 && otp2 && otp3 && otp4) {
      navigateToNextScreen();
    }
  }, [otp1, otp2, otp3, otp4]);

  // Function to navigate to the next screen (You can customize this logic)
  const navigateToNextScreen = () => {
    // Add your logic here
    // alert('Navigating to the next screen');
    // Uncomment the line below to navigate to the 'picture' screen
    navigation.navigate('picture');
  };

  const handleOtpChange = (value, inputRef) => {
    switch (inputRef) {
      case 'input1':
        setOtp1(value);
        if (value.length === 1) input2Ref.current.focus();
        break;
      case 'input2':
        setOtp2(value);
        if (value.length === 1) input3Ref.current.focus();
        break;
      case 'input3':
        setOtp3(value);
        if (value.length === 1) input4Ref.current.focus();
        break;
      case 'input4':
        setOtp4(value);
        if (value.length === 1) {

        //   // Check if all OTP inputs are filled
        //   if (otp1 && otp2 && otp3 && otp4) {
        //     navigateToNextScreen();
        //   }
        //   else{
        //     alert('lol')
        //   }
        }
        break;
      default:
        break;
    }
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

        
        <View style={{ justifyContent: 'center' ,marginTop:20}}>
          <Text style={{ color: 'white', fontSize: 10, fontWeight: '600', textAlign: 'center' }}>Kindly enter the OTP you have recieved</Text>
          <Text style={{ color: 'white', fontSize: 10, fontWeight: '600', textAlign: 'center' }}>on your registered phone number</Text>
        </View>

        {/* OTP Input Boxes */}
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={otp1}
            onChangeText={(text) => handleOtpChange(text, 'input1')}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={otp2}
            onChangeText={(text) => handleOtpChange(text, 'input2')}
            ref={input2Ref}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={otp3}
            onChangeText={(text) => handleOtpChange(text, 'input3')}
            ref={input3Ref}
          />
         <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={otp4}
            onChangeText={(text) => handleOtpChange(text, 'input4')}
            onSubmitEditing={navigateToNextScreen}
            ref={input4Ref}
            />
        </View>
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
    marginTop: -180,
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
  },
  otpInput: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 18,
    backgroundColor: '#FFC300',
    textAlign: 'center',
  },
});

export default OTP;
