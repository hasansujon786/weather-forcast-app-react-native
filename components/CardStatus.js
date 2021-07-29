import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { variables } from '../theme';

const search = require('../assets/search.png');
const notfound = require('../assets/notfound.png');

const CardStatus = ({ error }) => {
  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.img}
        source={error ? notfound : search}
        resizeMode='contain'
      />
      {error ? (
        <View>
          <Text style={styles.title}>Opps.</Text>
          <Text style={styles.text}>
            No results were{`\n`}found for your search.
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Search a place.</Text>
          <Text style={styles.text}>
            Search by city name to see details.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardStatus;


const styles = StyleSheet.create({
  contentCard: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: variables.colors.translucentCard,
    padding: 36,
    borderRadius: 12,
  },

  title: {
    textAlign: 'center',
    fontFamily: variables.fontFamily.bold_italic,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
    marginBottom: 16,
  },

  text: {
    textAlign: 'center',
    fontFamily: variables.fontFamily.regular_italic,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500,
  },

  img: {
    width: 82,
    height: 82,
  },
})

