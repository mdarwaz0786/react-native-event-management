import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get the device width
const { width } = Dimensions.get('window');

const PromotionalBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>Save 10% on every service</Text>
      </View>
      {/* <Text style={styles.headerText}>Bock B</Text>
      <Text style={styles.paragraphText}>
        This is a promotional banner to inform our customers about.
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  discountContainer: {
    backgroundColor: '#A63ED3',
    width: '100%',
    padding: 10,
    marginTop: 20,
    paddingStart: 20,
  },
  discountText: {
    fontSize: 22,
    color: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginStart: 20,
  },
  paragraphText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginStart: 20,
  },
});

export default PromotionalBanner;
