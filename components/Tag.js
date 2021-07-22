import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { variables } from '../theme'

const location = require('../assets/location.png');

const Tag = () => {
  return (
    <View style={styles.contentCard}>
      <View>
        <Text style={styles.title}>Your location</Text>
        <Text style={styles.text}>
          Search using your current {'\n'}location.
        </Text>
        <View style={styles.thumb}>
          <Image style={styles.img} source={location} resizeMode='contain' />
        </View>
      </View>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  contentCard: {
    height: 120,
    justifyContent: 'space-around',
    backgroundColor: variables.colors.accent,
    padding: 26,
    borderRadius: 12,
  },

  title: {
    textAlign: 'left',
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
    marginBottom: 12,
  },

  text: {
    textAlign: 'left',
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500 + '80',
  },

  thumb: {
    position: 'absolute',
    overflow: 'hidden',
    right: -20,
    height: 98,
  },

  img: {
    top: 32,
    width: 98,
    height: 100,
  },
})
