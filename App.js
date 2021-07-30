import AppLoading from 'expo-app-loading'
import React from 'react'
import { StatusBar } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Test from './screens/Test'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
} from "@expo-google-fonts/montserrat"

const Drawer = createDrawerNavigator();
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
          backgroundColor={variables.colors.accent}
          barStyle="light-content"
        />
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Test" component={Test} />
          </Drawer.Navigator>
        </NavigationContainer>

      </>
    )
  }
}

