import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
// import { Feather as Icon } from '@expo/vector-icons'
import fethcWeather from '../hooks/fethcWeather'
import CardTop from '../components/CardTop'
import CardStatus from '../components/CardStatus'
import Clock from '../components/Clock'
import Header from '../components/Header'
import SeachBar from '../components/SearchBar'
import Details, { BottomSheetHeader } from '../components/Details'

import { variables } from '../theme'


const Home = () => {
  const bottomSheetRef = React.useRef(null);
  const [showSearch, setShowSearch] = useState(false)
  const { getWeatherByCityName, loading, data, error } = fethcWeather('dhaka')

  const handleSubmit = async (name) => {
    await getWeatherByCityName(name)
    setShowSearch(false)
  }

  // search animation
  const searchOpacity = useDerivedValue(() => {
    return showSearch ? withTiming(1) : withTiming(0)
  }, [showSearch])
  const searchY = useDerivedValue(() => {
    return showSearch ? withTiming(0) : withTiming(20)
  }, [showSearch])
  const rSearchStyles = useAnimatedStyle(() => ({
    opacity: searchOpacity.value,
    transform: [{ translateY: searchY.value }]
  }))
  // contet animation
  const contentOpacity = useDerivedValue(() => {
    return showSearch ? withTiming(0) : withTiming(1)
  }, [showSearch])
  const contentY = useDerivedValue(() => {
    return showSearch ? withTiming(20) : withTiming(0)
  }, [showSearch])
  const rContentStyles = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateY: contentY.value }]
  }))


  return (
    <ImageBackground resizeMode='cover' style={styles.bgImage} source={require('../assets/bg_green.png')} >
      <View style={{ backgroundColor: variables.colors.imageDrakness, flex: 1 }}>
        <Header showSearch={showSearch} onToggleSearch={(val) => { setShowSearch(val) }} />
        <View style={{ paddingHorizontal: 20 }}>
          <Animated.View style={[rSearchStyles]}>
            {showSearch && <SeachBar loading={loading} onSubmit={handleSubmit} />}
          </Animated.View>
        </View>

        <Animated.View style={[rContentStyles]}>
          {!showSearch &&
            <>
              <Clock />
              <View>
                {data.uf?.length > 0 ? <CardTop data={data} /> : <CardStatus error={error} />}
              </View>
            </>
          }
        </Animated.View>

        <BottomSheet
          renderHeader={BottomSheetHeader}
          ref={bottomSheetRef}
          snapPoints={[200, 400, 50]}
          renderContent={() => <Details data={data} />}
        />
      </View>
    </ImageBackground >
  )
}

export default Home


const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
})


