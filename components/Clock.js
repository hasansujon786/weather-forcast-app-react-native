import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import 'moment/locale/en-nz'

import { variables } from '../theme'

const Clock = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 42, }}>
      <Text style={styles.date}>
        {moment().format('dddd, D MMMM')}
      </Text>
      <Text style={styles.time}>
        {moment().format('HH:mm')}
      </Text>
    </View>
  )
}

export default Clock

const styles = StyleSheet.create({
  time: {
    marginTop: 8,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.big,
    color: variables.colors.white500,
  },

  date: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
    color: variables.colors.white500,
  },
})
