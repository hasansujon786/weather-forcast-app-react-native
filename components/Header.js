import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { variables } from '../theme'

const Header = ({ onToggleSearch, place }) => {
  return (
    <View style={styles.header}>
      <Icon
        name='menu'
        size={22}
        color={variables.colors.white500}
      />
      <Text style={styles.headerTitle}>{place}</Text>
      <Icon
        name='map-pin'
        size={22}
        color={variables.colors.white500}
        onPress={()=> onToggleSearch(v => !v)}
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
    marginTop: 16,
  },

  headerTitle: {
    textAlign: 'center',
    color: variables.colors.white500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },
})
