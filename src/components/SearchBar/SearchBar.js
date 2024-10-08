import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for Weddings"
        placeholderTextColor="rgb(182, 182, 182)"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});

export default SearchBar;
