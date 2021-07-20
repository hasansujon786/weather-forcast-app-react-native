import React from 'react'
import {
  View,
  StyleSheet,
  Animated,
  ScrollView, Text, Image
} from 'react-native'
import { variables } from '../theme'
import CardInfo from './CardInfo'
// import { changeColorText } from '../components/animated.js'

const humidity_img = require('../assets/humidity.png')
const wind_img = require('../assets/wind.png')
const sun_img = require('../assets/sun.png')
const clouds_img = require('../assets/clouds.png')
const location = require('../assets/location.png');


const Tag = () => {
  return (
    <View style={styles.contentCard}>
      <View>
        <Text style={styles.title}>Your location</Text>
        <Text style={styles.text}>
          Search using your current {'\n'}location.
        </Text>
        <View style={styles.thumb}>
          <Image style={styles.img} source={location} resizeMode='contain' />
        </View>
      </View>
    </View>
  )
}

const Details = ({ details }) => {
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
        {/* <Animated.Text */}
        {/*   style={[styles.info, { color: changeColorText(scrollY) }]} */}
        {/* > */}
        {/*   Additional Information */}
        {/* </Animated.Text> */}
        <Text
          style={[styles.info, { color: 'red' }]}
        >
          Additional Information
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 26,
        }}
        style={{ marginTop: 8 }}
      >
        <CardInfo
          nameIcon='droplet'
          title='Humidity'
          img={humidity_img}
          // description='' 
          value={`${details.humidity ? details.humidity : 0}%`}
        />

        <CardInfo
          nameIcon='wind'
          title='Wind'
          img={wind_img}
          // description='' 
          value={`${details.wind ? details.wind : 0} km/h`}
        />

        <CardInfo
          nameIcon='sun'
          title='Visibility'
          img={sun_img}
          // description='' 
          value={`${details.visibility ? details.visibility : 0}km`}
        />

        <View style={{ marginRight: -12 }}>
          <CardInfo
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

  // tag
  contentCard: {
    height: 120,
    justifyContent: 'space-around',
    backgroundColor: variables.colors.orange500,
    padding: 26,
    borderRadius: 12,
  },

  title: {
    textAlign: 'left',
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
    marginBottom: 12,
  },

  text: {
    textAlign: 'left',
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500 + '80',
  },

  thumb: {
    position: 'absolute',
    overflow: 'hidden',
    right: -20,
    height: 98,
  },

  img: {
    top: 32,
    width: 98,
    height: 100,
  },
})
