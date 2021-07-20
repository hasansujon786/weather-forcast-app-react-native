import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import { variables } from '../theme'


import moment from 'moment'
import 'moment/locale/en-nz'

const Info = ({ iconName, style, children, ...props }) => (
  <View style={[styles.inline, style]} {...props}>
    {iconName && <Icon style={{ marginRight: 3 }} name={iconName} size={16} color={variables.colors.gray500} />}
    <Text style={styles.infoDesc}>{children}</Text>
  </View>
)

const CardTop = ({ data }) => {
  console.log(data.weather)
  return (
    <View style={styles.contentCard}>
      <View style={{}}>
        <Text style={styles.date}>
          {moment().format('dddd, D MMMM')}
        </Text>
        <Text style={styles.time}>
          {moment().format('HH:mm')}
        </Text>
      </View>

      <View style={styles.inline}>
        <Text style={styles.tem}>{data.temp.toFixed(0)}°</Text>
        <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -90 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={[styles.img, { marginTop: 20 }]}
              source={require('../assets/cloudy.png')}
              resizeMode='contain'
            />
            <Text style={styles.infoDesc}>{data.weather[0].description}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.inline, { justifyContent: 'space-between' }]}>
        <View style={[styles.inline]}>
          <Info iconName='arrow-down' >Min: {data.temp_min.toFixed(0)}°</Info>
          <Info style={{ marginLeft: 8 }} iconName='arrow-up' >Max: {data.temp_max.toFixed(0)}°</Info>
        </View>

        <Info iconName='wind'>Wind: {data.wind ? data.wind : 0}km/h</Info>
      </View>


    </View>
  )
}

export default CardTop


const styles = StyleSheet.create({
  contentCard: {
    height: 260,
    backgroundColor: variables.colors.gray100,
    padding: 36,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },

  time: {
    fontFamily: variables.fontFamily.bold,
    fontSize: variables.fontSize.h1,
    color: variables.colors.black400,
  },

  date: {
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.h3,
    color: variables.colors.orange500,
  },

  tem: {
    marginTop: 18,
    marginBottom: 24,
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.big,
    color: variables.colors.black400,
  },

  infoDesc: {
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h4,
    color: variables.colors.gray500,
  },

  img: {
    width: 82,
    height: 82,
  },

  inline: { flexDirection: 'row', alignItems: 'center' },
})


