import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import HeaderDetails from '../componets/HeaderDetails';
import Tag from '../componets/Tag';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const DetailsScreen = ({navigation, route}) => {
  const {params} = route;
  const {emailData} = params;
  useEffect(() => {
    console.log('Route: ', route);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderDetails navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.subjectText}>{emailData.subject}</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.boldGrayText}>Tags</Text>
          <Tag tag={emailData.tag} />
        </View>
        <View style={styles.bodyContainer}>
          <Text>{emailData.body}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={{paddingHorizontal: 10}}>
            <Icon color={'gray'} name={'paper-clip'} size={16} />
          </View>
          <Button
            title="Reply"
            onPress={() => {
              Alert.alert('Se presiono Reply');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 4,
  },
  view: {
    padding: 20,
  },
  boldGrayText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  subjectText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bodyContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});
