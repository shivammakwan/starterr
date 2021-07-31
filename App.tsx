/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
          }}
          style={styles.cardImage}>
          <View style={styles.cardInner}>
            <Text style={styles.cardTitle}>Hi</Text>
            <Text style={styles.cardDesc}>Bio will display here...</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    height: '70%',
    width: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  cardDesc: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
    marginHorizontal: 10,
  },
});

export default App;
