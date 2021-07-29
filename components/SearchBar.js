import React, { useState } from 'react'
import { View, ActivityIndicator, TextInput, TouchableOpacity, StyleSheet, } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { variables } from '../theme'

const SearchBar = ({ onSubmit, loading }) => {
  const [value, setValue] = useState('')
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
      }}
    >
      <View style={{ width: '78%' }}>
        <Icon
          style={styles.iconInput}
          name='search'
          color={variables.colors.white500 + '80'}
          size={22}
        />
        <TextInput
          autoFocus
          autoCapitalize='words'
          placeholder='Search a city'
          placeholderTextColor={variables.colors.white500 + '80'}
          selectionColor={variables.colors.white500 + '18'}
          style={styles.input}
          value={value}
          onChangeText={(value) => setValue(value)}
          onSubmitEditing={() => onSubmit(value)}
        />
      </View>

      <View style={{ marginLeft: '4%', width: "18%" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onSubmit(value)}
          style={styles.searchBtn}
        >
          {loading ? (
            <ActivityIndicator
              size='small'
              color={variables.colors.white500}
            />
          ) : (
              <Icon
                name='navigation'
                size={22}
                color={variables.colors.white500}
              />
            )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  iconInput: {
    position: 'absolute',
    top: '30%',
    left: 24,
  },

  input: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500,
    paddingLeft: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: variables.colors.white500 + '20',
  },

  searchBtn: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: variables.colors.white500 + '20',
  },

})
