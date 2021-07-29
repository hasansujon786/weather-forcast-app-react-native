import React from 'react'
import { View, StyleSheet } from 'react-native'
import { variables } from '../theme'
import CardInfo from './CardInfo'

const humidity_img = require('../assets/humidity.png')
const wind_img = require('../assets/wind.png')
const sun_img = require('../assets/sun.png')
const clouds_img = require('../assets/clouds.png')

export const BottomSheetHeader = () => (
  <View style={styles.sheetHeader}>
    <View style={styles.sheetHeaderPill} />
  </View>
)

const Details = ({ data }) => {
  return (
    <View style={styles.sheetBody}>
      <CardInfo
        title='Humidity'
        img={humidity_img}
        value={`${data?.humidity ? data.humidity : 0}%`}
      />

      <CardInfo
        title='Visibility'
        img={sun_img}
        value={`${data?.visibility ? data.visibility : 0}km`}
      />

      <CardInfo
        title='Wind'
        img={wind_img}
        value={`${data?.wind ? data.wind : 0} km/h`}
      />

      <CardInfo
        title='Clouds'
        img={clouds_img}
        value={`${data?.clouds ? data.clouds : 0}%`}
      />

      {/* <ScrollView */}
      {/*   style={{paddingTop: 12}} */}
      {/*   showsHorizontalScrollIndicator={false} */}
      {/*   contentContainerStyle={{ */}
      {/*     paddingHorizontal: 16, */}
      {/*   }} */}
      {/* > */}
      {/* </ScrollView> */}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  sheetBody: {
    backgroundColor: variables.colors.black300,
    height: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  sheetHeader: {
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: variables.colors.black300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetHeaderPill: {
    backgroundColor: variables.colors.gray700,
    width: 100,
    height: 6,
    borderRadius: 3,
  }
})
