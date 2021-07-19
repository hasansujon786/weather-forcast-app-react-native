import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Animated
} from 'react-native'
// import CardDetail from '../../components/CardDetail'
// import Tag from '../../components/Tag'
import { variables } from '../theme'

const humidity_img = require('../assets/humidity.png')
const wind_img = require('../assets/wind.png')
const sun_img = require('../assets/sun.png')
const clouds_img = require('../assets/clouds.png')

const Details = () => {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: -260, zIndex: 2 }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
      <View style={{ height: 264, display: 'flex' }} />

      <View style={styles.body}>
        <Animated.Text
          style={[styles.info, { color: changeColorText(scrollY) }]}
        >
          Additional Information
        </Animated.Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 26,
        }}
        style={{ marginTop: 8 }}
      >
        <CardDetail
          nameIcon='droplet'
          title='Humidity'
          img={humidity_img}
          // description='' 
          value={`${details.humidity ? details.humidity : 0}%`}
        />

        <CardDetail
          nameIcon='wind'
          title='Wind'
          img={wind_img}
          // description='' 
          value={`${details.wind ? details.wind : 0} km/h`}
        />

        <CardDetail
          nameIcon='sun'
          title='Visibility'
          img={sun_img}
          // description='' 
          value={`${details.visibility ? details.visibility : 0}km`}
        />

        <View style={{ marginRight: -12 }}>
          <CardDetail
            nameIcon='cloud'
            title='Clouds'
            img={clouds_img}
            // description='' 
            value={`${details.clouds ? details.clouds : 0}%`}
          />
        </View>
      </ScrollView>

      <View style={[styles.body, { marginTop: 24 }]}>
        <Tag />
      </View>

      <View style={{ height: 64 }} />
    </Animated.ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  body: {
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
  },

  info: {
    textAlign: 'center',
    color: variables.colors.gray500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
  },
})
