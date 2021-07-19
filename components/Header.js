import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { variables } from '../theme'

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon
        name='menu'
        size={22}
        color={variables.colors.white500}
      />
      <Text style={styles.headerTitle}>Weather Forecast</Text>
      <Icon
        name='refresh-ccw'
        size={22}
        color={variables.colors.white500}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  headerTitle: {
    textAlign: 'center',
    color: variables.colors.white500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },
})
