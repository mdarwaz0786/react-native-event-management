import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../SearchBar/SearchBar.js';
import Home from '../Home/Home.js';
import Top from '../Home/Top.js';

const images = [
  { id: '1', title: 'Weddings', source: require('../../assets/image1.png') },
  { id: '2', title: 'Corporate Event', source: require('../../assets/image2.png') },
  { id: '3', title: 'Social Gathering', source: require('../../assets/image3.png') },
  { id: '4', title: 'Birthday Parties', source: require('../../assets/image4.png') },
  { id: '5', title: 'Sports and Recreational Events', source: require('../../assets/image5.png') },
  { id: '6', title: 'Charity and Fundraising Events', source: require('../../assets/image6.png') },
  { id: '7', title: 'Cultural and Religious Events', source: require('../../assets/image7.png') },
  { id: '8', title: 'Holiday and Seasonal Events', source: require('../../assets/image8.png') },
  { id: '9', title: 'Product Launches and Promotions', source: require('../../assets/image9.png') },
];

const ImageGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Top />
      <SearchBar />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />
      <Home />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  grid: {
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
  },
});

export default ImageGrid;
