import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Contact')}>
        <Ionicons name="call-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
});
