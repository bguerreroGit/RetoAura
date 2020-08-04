import React from 'react';
import {View, StyleSheet} from 'react-native';
import TitleWithBadge from './TitleWithBadge';
import FilterButton from './FilterButton';

const HomeHeader = ({badgeNumber}) => (
  <View style={styles.container}>
    <TitleWithBadge count={badgeNumber} />
    <FilterButton onPress={() => {}} />
  </View>
);

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});
