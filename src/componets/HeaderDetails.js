import React from 'react';
import {Alert, View, StyleSheet, Button} from 'react-native';

const HeaderDetails = ({params}) => (
  <View style={styles.container}>
    <Button
      title={'Delete'}
      color={'red'}
      onPress={() => {
        Alert.alert('Se presiono Delete');
      }}
    />
    <View style={{width: 20}} />
    <Button
      title={'Spam'}
      color={'gray'}
      onPress={() => {
        Alert.alert('Se presiono Spam');
      }}
    />
    <View style={{flex: 1}} />
    <Button
      title={'Mark as unread'}
      onPress={() => {
        Alert.alert('Se presiono Mark as unread');
      }}
    />
  </View>
);

export default HeaderDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});
