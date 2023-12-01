// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
  
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }

       await AsyncStorage.setItem(username, JSON.stringify({ username, password }));
      
       setUsername('');
      setPassword('');

  
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Registration Screen</Text>
     <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0', // Add a background color
  },
  title: {
    fontSize: 28, // Increase font size
    fontWeight: 'bold',
    marginBottom: 20, // Increase spacing below the title
    color: '#333', // Change text color
    textShadowColor: '#666', // Add text shadow color
    textShadowOffset: { width: 1, height: 1 }, // Add text shadow offset
    textShadowRadius: 2, // Add text shadow radius
  },
  input: {
    height: 50, // Increase input height
    borderColor: '#007AFF', // Change border color
    borderBottomWidth: 2, // Add border bottom width for a bottom border
    width: 300,
    marginVertical: 20, // Increase spacing around input
    paddingHorizontal: 12, // Increase horizontal padding
    borderRadius: 10, // Add border radius for rounded corners
    backgroundColor: 'white', // Add a white background color
    color: '#333', // Change text color
  },
});

export default RegistrationScreen;
