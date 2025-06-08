import React, { ReactNode } from 'react';
import {  StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView style={styles.content}>
        {children}
      </ScrollView>
       <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default BaseLayout;
