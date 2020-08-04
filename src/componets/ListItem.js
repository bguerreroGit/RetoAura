import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const ListItem = ({data}) => (
  <View style={[styles.container, !data.isReaded && styles.unread]}>
    <View style={styles.row}>
      <Text
        style={[
          styles.boldGrayText,
          styles.flex,
          !data.isReaded && styles.boldBlueText,
        ]}>
        {data.subject}
      </Text>
      <Text style={styles.grayText}>09:15 AM</Text>
    </View>
    <View style={[styles.row, {marginTop: 6}]}>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={[styles.grayText, styles.flex]}>
        {data.body}
      </Text>
      {!data.isReaded && <Icon color={'gray'} name={'paper-clip'} size={16} />}
    </View>
  </View>
);

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  boldGrayText: {
    fontWeight: 'bold',
    color: 'gray',
  },
  boldBlueText: {
    fontWeight: 'bold',
    color: 'deepskyblue',
  },
  grayText: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  unread: {
    borderLeftColor: 'deepskyblue',
    borderLeftWidth: 6,
    backgroundColor: 'lightcyan',
  },
});
