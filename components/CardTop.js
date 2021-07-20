import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import { variables } from '../theme'


import moment from 'moment'
import 'moment/locale/en-nz'


const CardTop = ({ data }) => {
  return (
    <View style={styles.contentCard}>
      <View style={styles.inline}>
        <Icon name='map-pin' size={32} color={variables.colors.orange500} />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.nameCity}>
            {data.city}, {data.uf}
          </Text>
          <Text style={styles.data}>
            {moment().format('dddd, D MMMM')}
          </Text>
        </View>
      </View>

      <View style={[styles.inline, { justifyContent: 'space-between' }]}>
        <Text style={styles.tem}>{data.temp.toFixed(0)}°</Text>
        <Image
          style={styles.img}
          source={require('../assets/cloudy.png')}
          resizeMode='contain'
        />
      </View>

      <View style={styles.inline}>
        <View
          style={[
            styles.inline,
            {
              marginRight: 24,
            },
          ]}
        >
          <Icon name='arrow-down' size={16} color={variables.colors.gray500} />
          <Text style={styles.temps}>Min: {data.temp_min.toFixed(0)}</Text>
        </View>
        <View style={styles.inline}>
          <Icon name='arrow-up' size={16} color={variables.colors.gray500} />
          <Text style={styles.temps}>Max: {data.temp_max.toFixed(0)}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardTop


const styles = StyleSheet.create({
  contentCard: {
    height: 260,
    backgroundColor: variables.colors.white500,
    padding: 36,
    borderRadius: 12,
  },

  nameCity: {
    fontFamily: variables.fontFamily.bold,
    fontSize: variables.fontSize.h1,
    color: variables.colors.black400,
  },

  data: {
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.h5,
    color: variables.colors.orange500,
  },

  tem: {
    marginTop: 18,
    marginBottom: 24,
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.big,
    color: variables.colors.black400,
  },

  temps: {
    marginLeft: 4,
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


