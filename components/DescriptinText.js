import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { variables } from '../theme'

const DescriptinText = ({ iconName, style, children, ...props }) => (
  <View style={[styles.inline, style]} {...props}>
    {iconName && <Icon style={{ marginRight: 3 }} name={iconName} size={16} color={variables.colors.gray500} />}
    <Text style={styles.infoDesc}>{children}</Text>
  </View>
)

export default DescriptinText

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h4,
    color: variables.colors.gray500,
    fontWeight: 'bold'
  },

  inline: { flexDirection: 'row', alignItems: 'center' },
})


