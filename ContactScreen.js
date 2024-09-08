import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>You can reach us at: contact@example.com</Text>
      <Button title="Go Back" color="#4CAF50" onPress={() => navigation.goBack()} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});