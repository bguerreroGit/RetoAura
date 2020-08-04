import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Context} from '../store/Store';

const SearchBar = ({onPressSearchButton}) => {
  const {searchMails} = React.useContext(Context);
  const [query, setQuery] = React.useState('');

  const handleText = (text) => setQuery(text);

  const onPressButton = () => {
    searchMails(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput
          value={query}
          style={styles.textInput}
          placeholder={'Search'}
          onChangeText={handleText}
          returnKeyType={'search'}
          onSubmitEditing={(e) => onPressButton()}
        />
        <Ionicons.Button
          backgroundColor={'white'}
          name={'search'}
          size={22}
          color={'lightgray'}
          onPress={onPressButton}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textInput: {
    width: '100%',
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
