import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SquareComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default SquareComponent;
