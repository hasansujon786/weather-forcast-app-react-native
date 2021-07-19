import React from 'react'
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native'
// import { Feather as Icon } from '@expo/vector-icons'

import Header from '../components/Header'
import SeachBar from '../components/SearchBar'
// import Details from '../components/Details'
import {
  fadeInTop,
  findOut,
  opacityAnimated,
  changeColorText,
} from '../components/animated.js'
import { variables } from '../theme'
// import CardStatus from '../../components/CardStatus'
// import CardMain from '../../components/CardMain'

import fethcWeather from '../hooks/fethcWeather'



const Home = () => {
  const scrollY = new Animated.Value(0)
  const {getWeatherByCityName, loading, data, details, error} = fethcWeather()
  console.log(details)
  console.log(data)


  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Header/>
        <SeachBar loading={loading} onSubmit={getWeatherByCityName}/>
      </View>

      <Animated.View
        style={[
          styles.body,
          {
            marginTop: -140,
            zIndex: findOut(scrollY),
            bottom: fadeInTop(scrollY),
            opacity: opacityAnimated(scrollY),
          },
        ]}
      >
        {/* {data.uf?.length > 0 ? ( */}
        {/*   <CardMain data={data} /> */}
        {/* ) : ( */}
        {/*     <CardStatus error={error} /> */}
        {/*   )} */}
      </Animated.View>

      {/* <Details/> */}
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.gray100,
  },

  cardHeader: {
    zIndex: 0,
    height: 290,
    padding: 24,
    backgroundColor: variables.colors.accent,
  },
})


