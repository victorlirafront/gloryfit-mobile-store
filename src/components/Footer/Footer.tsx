import { View } from 'react-native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default Footer;
