import React, {useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HomeHeader from '../componets/HomeHeader';
import SearchBar from '../componets/SearchBar';
import ListItem from '../componets/ListItem';
import mail_data from '../data/mail-data.json';
import {Context} from '../store/Store';

const HomeScreen = ({navigation}) => {
  const {mailsState, setMails, addMail, replaceMail} = useContext(Context);

  const {filteredMailsData} = mailsState;

  useEffect(() => {
    const initialGlobalState = () => {
      setMails(mail_data);
    };
    initialGlobalState();
    const interval = setInterval(() => {
      let newMail = {
        from: 'mhallatt0@walmart.com',
        to: 'cziem0@surveymonkey.com',
        subject: 'New Mail',
        body:
          'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
        date: '3/31/2017',
        isReaded: false,
        avatar:
          'https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1',
        tag: 'Indigo',
        attachements: [
          {
            file: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
            name: 'ut_nulla_sed.jpeg',
          },
        ],
      };
      addMail(newMail);
    }, 90000);
    return () => clearInterval(interval);
  }, []);

  const onPressListItem = (item, index) => {
    setReadingMail(index);
    navigation.navigate('Details', {emailData: item});
  };

  const setReadingMail = (index) => {
    const mail = {...filteredMailsData[index], isReaded: true};
    replaceMail(mail, index);
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => onPressListItem(item, index)}>
      <ListItem data={item} navigation={navigation} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader badgeNumber={3} />
      <SearchBar
        onPressSearchButton={(query) => {
          console.log(query);
        }}
      />
      <FlatList
        data={filteredMailsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
