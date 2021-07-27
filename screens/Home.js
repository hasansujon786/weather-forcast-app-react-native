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
import Header from '../components/Header'
import SeachBar from '../components/SearchBar'
import Details from '../components/Details'

import { variables } from '../theme'


const Home = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { getWeatherByCityName, loading, data, error } = fethcWeather('dhaka')

  const handleSubmit = async (name) => {
    await getWeatherByCityName(name)
    setShowSearch(false)
  }

  return (
    <ImageBackground resizeMode='cover' style={styles.bgImage} source={require('../assets/bg_green.png')}>
      <View style={{ backgroundColor: variables.colors.imageDrakness, flex: 1 }}>
        <Header place={loading ? 'Fetching data...' : `${data.city}, ${data.uf}`} onToggleSearch={setShowSearch} />
        <View style={{ paddingHorizontal: 20 }}>
          {showSearch && <SeachBar loading={loading} onSubmit={handleSubmit} />}
        </View>

        {!showSearch &&
          <>
            <Clock />
            <View>
              {data.uf?.length > 0 ? <CardTop data={data} /> : <CardStatus error={error} />}
            </View>
            <View style={{ flex: 1 }} />
            {data.uf?.length > 0 && <Details data={data} />}
          </>
        }
      </View>
    </ImageBackground>
  )
}

export default Home


const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
})


