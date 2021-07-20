import React from 'react'
import {
  View,
  StyleSheet,
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

const Details = ({ data }) => {
  return (
    <View style={{backgroundColor: variables.colors.gray100}}>
      <Text style={styles.info} >
        Additional Information
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 26,
        }}
        style={{ marginTop: 8 }}
      >
        <CardInfo
          title='Humidity'
          img={humidity_img}
          value={`${data.humidity ? data.humidity : 0}%`}
        />

        <CardInfo
          title='Visibility'
          img={sun_img}
          value={`${data.visibility ? data.visibility : 0}km`}
        />

        <CardInfo
          title='Wind'
          img={wind_img}
          value={`${data.wind ? data.wind : 0} km/h`}
        />

        <View style={{ marginRight: -12 }}>
          <CardInfo
            title='Clouds'
            img={clouds_img}
            value={`${data.clouds ? data.clouds : 0}%`}
          />
        </View>
      </ScrollView>

      <View style={[styles.body, { marginTop: 24 }]}>
        <Tag />
      </View>

      <View style={{ height: 64 }} />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 24,
  },

  info: {
    textAlign: 'center',
    color: variables.colors.gray500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    marginVertical: 20,
  },

  // tag
  contentCard: {
    height: 120,
    justifyContent: 'space-around',
    backgroundColor: variables.colors.accent,
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
