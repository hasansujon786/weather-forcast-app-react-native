import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import CardInfo from './CardInfo'

const humidity_img = require('../assets/humidity.png')
const wind_img = require('../assets/wind.png')
const sun_img = require('../assets/sun.png')
const clouds_img = require('../assets/clouds.png')

const Details = ({ data }) => {
  return (
    <View style={styles.sheetBody}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
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
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  sheetBody: {
    backgroundColor: '#242424',
    paddingTop: 50,
    paddingBottom: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
})
