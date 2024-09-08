import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './NavBar';  // Import NavBar
import ContactScreen from './ContactScreen';  // Import the ContactScreen component

const myImg = require('./assets/icon.png');

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to myapp</Text>
        </View>

        {/* Main Image */}
        <Image
          source={myImg}
          style={styles.mainImage}
        />

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>
            This is the about section
          </Text>
        </View>
      </ScrollView>

      {/* Navbar */}
      <NavBar />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  mainImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
});
