import React, { useEffect, useState } from 'react';
import Screen from './app/components/Screen'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'
import { Button, Image } from 'react-native';

  
export default function App(){
const [imageUri, setImageUri] = useState();


  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
    alert('you need permission')
  }

  useEffect (() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      
      const result = await ImagePicker.launchImageLibraryAsync();
      setImageUri(result.uri)
    } catch (error) {
      console.log('erro')
    }
  }


  return <Screen>
    <Button title='Select Image' onPress={selectImage}/>
    <Image source={{uri: imageUri}} style= {{width: 200, height: 200}}/>
   
  </Screen>
}
