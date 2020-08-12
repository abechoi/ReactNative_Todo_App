import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#333'
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 40
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 30
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 40
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 50
  }
});