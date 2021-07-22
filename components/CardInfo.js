import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import { variables } from '../theme'

const CardInfo = ({ title, img, value }) => {
  return (
    <View style={styles.contentCard}>
      <View
        style={{
          flex: 7,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ height: 42, width: 42 }}
          source={img}
          resizeMode='contain'
        />
      </View>
      <View style={{ flex: 5 }}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.description}>{description}</Text> */}
      </View>
    </View>
  );
}

export default CardInfo

const styles = StyleSheet.create({
  contentCard: {
    height: 140,
    width: 140,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: variables.colors.translucentCard,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
  },

  title: {
    textAlign: 'center',
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500,
  },

  value: {
    textAlign: 'center',
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
  },

  // description: {
  //   fontFamily: variables.fontFamily.regular,
  //   fontSize: variables.fontSize.h5,
  //   color: variables.colors.gray500,
  // },

  inline: { flexDirection: 'row', alignItems: 'center' },

})
