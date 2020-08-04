import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const FilterButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>Filter by</Text>
  </TouchableOpacity>
);

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
  },
});
