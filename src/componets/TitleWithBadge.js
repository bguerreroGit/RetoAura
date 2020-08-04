import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from '../store/Store';

const TitleWithBadge = ({count}) => {
  const {mailsState} = React.useContext(Context);
  return (
    <View style={styles.row}>
      <Text style={styles.titleText}>Inbox</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{mailsState.unreadMails}</Text>
      </View>
    </View>
  );
};

TitleWithBadge.defaultProps = {
  count: 0,
};

export default TitleWithBadge;

const styles = StyleSheet.create({
  container: {
    height: 18,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  titleText: {
    marginRight: 10,
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
