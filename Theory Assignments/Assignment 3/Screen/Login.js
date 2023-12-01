// LoginScreen.js
import React, { useState } from 'react';
import { TouchableOpacity,View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navi=()=>{
  navigation.navigate("Registration");
}
  const handleLogin = async () => {
    try {
      // Validate input
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }

      // Retrieve user data from local storage
      const userData = await AsyncStorage.getItem(username);

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        
        if (parsedUserData.password === password) {
         
          setUsername('');
          setPassword('');

          navigation.navigate('CVForm', { userData: parsedUserData });
        } else {
          alert('Invalid password');
        }
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity style={styles.button} onPress={navi}>
        <Text>Didnt have any account Signup</Text>
      </TouchableOpacity>
    </View>
  );
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

export default LoginScreen;
