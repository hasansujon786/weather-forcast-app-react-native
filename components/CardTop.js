import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

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
      <View >
        <Text style={[styles.infoDesc, { fontSize: variables.fontSize.h3, marginBottom: 1 }]}>{data.weather[0].main}</Text>
        <View style={[styles.inline, { justifyContent: 'space-between' }]}>
          <View style={styles.inline}>
            <Text style={styles.infoDesc}>Min: {Math.floor(data.temp_min)}°</Text>
            <Text style={[styles.infoDesc, { marginLeft: 6 }]}>Max: {Math.floor(data.temp_max)}°</Text>
          </View>

          <View style={styles.inline}>
            <Icon style={{ marginRight: 4, color: variables.colors.white500 }} name='map-pin' />
            <Text style={styles.infoDesc}>{data.city}, {data.uf}</Text>
          </View>
        </View>
      </View>
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
    height: 180,
    justifyContent: 'space-between'
  },

  tem: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.big,
    color: variables.colors.white500,
  },

  infoDesc: {
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h5,
    color: variables.colors.white500,
  },

  img: {
    width: 62,
    height: 62,
  },

  inline: { flexDirection: 'row', alignItems: 'center' },
})


