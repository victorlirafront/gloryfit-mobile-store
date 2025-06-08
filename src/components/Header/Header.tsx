import React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native';


function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>New header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  }
});

export default Header;
