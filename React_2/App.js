import React, { useEffect } from 'react';
import Screen from './app/components/Screen'
import * as ImagePicker from 'expo-image-picker'

  
export default function App(){
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
    alert('you need permission')
  }

  useEffect (() => {
    requestPermission();
  }, [])

  return <Screen></Screen>
}
