import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'
// import { Feather as Icon } from '@expo/vector-icons'
import fethcWeather from '../hooks/fethcWeather'
import CardTop from '../components/CardTop'
import CardStatus from '../components/CardStatus'
import Clock from '../components/Clock'
// import Header from '../components/Header'
// import SeachBar from '../components/SearchBar'
import Details from '../components/Details'

import { variables } from '../theme'


const Home = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { getWeatherByCityName, loading, data, error } = fethcWeather('dhaka')

  return (
    <ImageBackground resizeMode='cover' style={styles.bgImage} source={require('../assets/bg_green.png')}>
      <View style={{ backgroundColor: variables.colors.imageDrakness, flex: 1 }}>
        <Clock />
        <View>
          {data.uf?.length > 0 ? (
            <CardTop data={data} />
          ) : (
              <CardStatus error={error} />
            )}
        </View>
        {data.uf?.length > 0 && <Details data={data} />}
      </View>

      {/* <View style={styles.container}> */}

      {/* <View style={styles.cardHeader}> */}
      {/*   <Header place={loading ? 'Fetching data...' : `${data.city}, ${data.uf}`} onToggleSearch={setShowSearch} /> */}
      {/*   {showSearch && <SeachBar loading={loading} onSubmit={getWeatherByCityName} />} */}
      {/* </View> */}
      {/* <View style={{ */}
      {/*   backgroundColor: variables.colors.white500, */}
      {/*   borderTopEndRadius: 20, */}
      {/*   borderTopStartRadius: 20, */}
      {/* }}> */}
      {/* </View> */}
      {/* </View> */}
    </ImageBackground>

  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: variables.colors.gray100,
  },
  bgImage: {
    flex: 1,
  },
  body: {},


  cardHeader: {
    zIndex: 0,
    padding: 24,
    backgroundColor: variables.colors.accent,
  },
})


