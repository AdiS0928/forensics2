import { StyleSheet, Text, View, SafeAreaView as SV, Image, TextInput as TI, Pressable, Modal, TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect, useRef} from 'react';

import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
const Picture = () => {
  const navigation = useNavigation();
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState(undefined);
  const [photoBase, setPhotoBase] = useState('')

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    setPhotoBase("data:image/jpg;base64," + newPhoto.base64)

  };

  if (photo) {
 

  //   return (
  //     <SafeAreaView style={{height:'100%'}}>
  //       <Image style={{height:'60%'}} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
  //       <Button title="Share" onPress={sharePic} />
  //       {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
  //       <Button title="Discard" onPress={() => setPhoto(undefined)} />
  //     </SafeAreaView>
  //   );
  }

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

        <View style={{justifyContent:'center',height:600,width:'100%',marginTop:-100}}>
            <Camera style={{height:'50%',width:'90%',zIndex:10000,alignSelf:'center'}} ref={cameraRef} >
            </Camera>
        </View>

        <TouchableOpacity style={styles.loginButton} >
          <Text style={styles.loginButtonText}>Capture</Text>
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

    marginTop:0
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
    width:250,
    marginTop:-100
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center'
  },
});

export default Picture;
