import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Tag = ({tag}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{tag}</Text>
  </View>
);

export default Tag;

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 2,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
  },
});
