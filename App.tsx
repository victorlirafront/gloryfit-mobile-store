import { StatusBar } from 'expo-status-bar';
import { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseLayout from './src/BaseLayout/BaseLayout';

export default function App() {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text>Open up App</Text>
        <StatusBar style="auto" />
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
