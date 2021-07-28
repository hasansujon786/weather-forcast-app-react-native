import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { variables } from '../theme'

const Header = ({ onToggleSearch, showSearch }) => {
  return (
    <View style={styles.header}>
      <Icon
        name='menu'
        size={22}
        color={variables.colors.white500}
      />
      {showSearch ?
        <Icon
          name='x'
          size={22}
          color={variables.colors.white500}
          onPress={() => onToggleSearch(v => !v)}
        /> :
        <Icon
          name='search'
          size={22}
          color={variables.colors.white500}
          onPress={() => onToggleSearch(v => !v)}
        />
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 24
  },

  headerTitle: {
    textAlign: 'center',
    color: variables.colors.white500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },
})
