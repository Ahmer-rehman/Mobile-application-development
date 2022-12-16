import React from 'react'
import { View, Text, StyleSheet, TextInput,Image ,Touchable, TouchableOpacity, Alert } from 'react-native'
import { Bottombar } from './Bottm'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
* @author
* @function 
**/
export const Login = ({navigation}) => {

const { container } = styles
 return(
         
  <View style={container}>
 
  <Image style={{height:300,width:400,}} source={{uri:'https://1000logos.net/wp-content/uploads/2017/08/Color-Spotify-Logo.jpg'}}></Image>  
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Username'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Password'

  ></TextInput>
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text}>           Log in</Text>
  </TouchableOpacity>
  <TouchableOpacity><Text style={styles.Text}>forget you password</Text></TouchableOpacity>
  <Text style={styles.Text}>------------------   OR  ------------------</Text>
 
  <TouchableOpacity style={styles.button}
    
  onPress={() => navigation.navigate('Register')}


>
    <Text style={styles.Text}>           Register</Text>
  </TouchableOpacity>
  <Bottombar></Bottombar> 
  </View>
  )



 }


const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'#ffffff',
   height:'100%',
   width:'100%'
  },
  
  View:{
    marginTop:"2%",    
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
    
                       
  },
  Login:{
    height:30,
     width:200,
     padding:10,
     borderColor:'#1DB954',
     borderWidth:2,

     borderRadius:10

  },
  Text:{
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
  button:{
    backgroundColor:'#1DB954',
    height:30,
    width:150,
    marginTop:10,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center'
  
  }

})