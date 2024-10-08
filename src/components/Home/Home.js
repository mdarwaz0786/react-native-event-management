import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CardList = () => {
  return (
    <>
      <Text style={styles.headerText}>Venues in your city</Text>
      <View style={styles.row}>
        {/* First Item */}
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
            {/* Rating Star */}
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="green" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          {/* Item Description */}
          <View style={styles.cardContent}>
            <Text style={styles.description}>This is a description of product one.</Text>
            <Text style={styles.title}>Product One</Text>
            <Text style={styles.price}>$29.99</Text>
          </View>
        </View>

        {/* Second Item */}
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
            {/* Rating Star */}
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="green" />
              <Text style={styles.ratingText}>4.0</Text>
            </View>
          </View>
          {/* Item Description */}
          <View style={styles.cardContent}>
            <Text style={styles.description}>This is a description of product two.</Text>
            <Text style={styles.title}>Product Two</Text>
            <Text style={styles.price}>$19.99</Text>
          </View>
        </View>
      </View>
      <Button mode="contained" style={styles.button} labelStyle={styles.buttonLabel}>
        View all venues
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: '#333',
    marginTop: 20,
    marginBottom: 0,
    marginStart: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    width: '48%',
  },
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  ratingText: {
    color: 'green',
    fontSize: 14,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  cardContent: {
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#A63ED3',
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#A63ED3',
    borderColor: '#A63ED3',
    borderWidth: 1,
  },
  buttonLabel: {
    color: '#fff',
  },
});

export default CardList;
