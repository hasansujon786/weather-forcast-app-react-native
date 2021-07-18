import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import React from 'react'
import Home from './screens/Home'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
} from "@expo-google-fonts/montserrat"

import { variables } from './theme'


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar
          backgroundColor={variables.colors.orange500}
          barStyle="light-content"
        />
        <Home />
      </>
    )
  }
}

