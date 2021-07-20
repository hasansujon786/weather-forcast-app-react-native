import React, { useState } from 'react'
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native'
// import { Feather as Icon } from '@expo/vector-icons'

import Header from '../components/Header'
import SeachBar from '../components/SearchBar'
import Details from '../components/Details'
import {
  fadeInTop,
  findOut,
  opacityAnimated,
} from '../components/animated.js'
import { variables } from '../theme'

import fethcWeather from '../hooks/fethcWeather'
import CardTop from '../components/CardTop'
import CardStatus from '../components/CardStatus'



const Home = () => {
  const [showSearch, setShowSearch] = useState(false)
  const scrollY = new Animated.Value(0)
  const { getWeatherByCityName, loading, data, error } = fethcWeather('dhaka')

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Header place={loading ? 'Fetching data...' : `${data.city}, ${data.uf}`} onToggleSearch={setShowSearch} />
        {showSearch && <SeachBar loading={loading} onSubmit={getWeatherByCityName} />}
      </View>

      <View style={{
        backgroundColor: variables.colors.white500,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
      }}>
        <Animated.View
          style={[
            styles.body,
            {
              zIndex: findOut(scrollY),
              bottom: fadeInTop(scrollY),
              opacity: opacityAnimated(scrollY),
              paddingHorizontal: 0,
            },
          ]}
        >
          {data.uf?.length > 0 ? (
            <CardTop data={data} />
          ) : (
              <CardStatus error={error} />
            )}
        </Animated.View>
        {data.uf?.length > 0 && <Details scrollY={scrollY} data={data} />}
      </View>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.gray100,
  },
  body: {
    backgroundColor: variables.colors.accent,
  },


  cardHeader: {
    zIndex: 0,
    padding: 24,
    backgroundColor: variables.colors.accent,
  },
})


