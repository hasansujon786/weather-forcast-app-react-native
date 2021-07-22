import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
// import { Feather as Icon } from '@expo/vector-icons'

import { variables } from '../theme'

const CardTop = ({ data }) => {
  return (
    <View style={styles.contentCard}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
        <Image
          style={styles.img}
          source={require('../assets/cloudy.png')}
          resizeMode='contain'
        />
        <Text style={styles.tem}>{data.temp.toFixed(0)}°</Text>
      </View>
      <View>
        <Text style={styles.infoDesc}>Sunny</Text>
        <Text style={[styles.infoDesc, { fontSize: variables.fontSize.h5 }]}>Noon</Text>
      </View>

      {/* <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -90 }}> */}
      {/*   <View style={{ alignItems: 'center' }}> */}
      {/*     <Text style={styles.infoDesc}>{data.weather[0].description}</Text> */}
      {/*   </View> */}
      {/* </View> */}
      {/* <View style={[styles.inline, { justifyContent: 'space-between' }]}> */}
      {/*   <View style={[styles.inline]}> */}
      {/*     <Info iconName='arrow-down' >Min: {data.temp_min.toFixed(0)}°</Info> */}
      {/*     <Info style={{ marginLeft: 8 }} iconName='arrow-up' >Max: {data.temp_max.toFixed(0)}°</Info> */}
      {/*   </View> */}

      {/*   <Info iconName='wind'>Wind: {data.wind ? data.wind : 0}km/h</Info> */}
      {/* </View> */}


    </View>
  )
}

export default CardTop

const styles = StyleSheet.create({
  contentCard: {
    backgroundColor: variables.colors.translucentCard,
    paddingHorizontal: 32,
    paddingVertical: 22,
    borderRadius: 12,
    margin: 20,
    height: 180,
    justifyContent: 'space-between'
  },

  tem: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.big,
    color: variables.colors.white500,
  },

  infoDesc: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
  },

  img: {
    width: 62,
    height: 62,
  },

  inline: { flexDirection: 'row', alignItems: 'center' },
})


