import React from 'react';
import {ImageBackground, StyleSheet,Text,TouchableOpacity,TextInput,Image, View} from 'react-native';

const image = {uri: 'https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY='};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Image source={image} 
        style={{
          width: 100,
          height: 100,
          alignItems:"center",justifyContent:"center",

          borderRadius: 50, 
          marginBottom: 20, marginLeft:"38%",marginTop:60
        }} />
    <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#333"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#333"
        secureTextEntry={true}
      />
      </ImageBackground>
      
      <View style={{flex: 4,padding:40, backgroundColor: 'white'}}>
      <TouchableOpacity 
        style={{
      padding:20,
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity 
        onPress={() => { /* Handle Forgot Password */ }}
        style={{
          
          
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 10, // Added for spacing
        }}
      >
        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        
        style={{
          margin:10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>create a new account</Text>
      </TouchableOpacity>

      </View>
    </View>
  
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 6,height:"100%",width:'100%',
    justifyContent: 'center',
  },
  input: {
    height:40,width:"80%",
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft:40,
    paddingHorizontal: 5,
    borderRadius: 5,
    
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;