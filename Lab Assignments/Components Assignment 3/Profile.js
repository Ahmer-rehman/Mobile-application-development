import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
        

/**
* @author
* @function Profile
**/
export const Profile = ({navigation}) => {

const { container } = styles

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const getValueLocally=()=>{
        AsyncStorage.getItem("name")
        .then((value)=>setName(value));
        AsyncStorage.getItem("email")
        .then((value)=>setEmail(value));
        AsyncStorage.getItem("phone")
        .then((value)=>setPhone(value));
        AsyncStorage.getItem("password")
        .then((value)=>setPassword(value));
    }
    useEffect(()=>{
        getValueLocally()
    },[])
   
return(
  <View style={container}>
    
  <Image style={{height:300,width:400,}} source={{uri:'https://1000logos.net/wp-content/uploads/2017/08/Color-Spotify-Logo.jpg'}}></Image>  
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Ahmer'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Rehman'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Sp20-bse-039@cuiatk.edu.pk'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='**********'

  ></TextInput>
  <View><TouchableOpacity style={styles.button}
   onPress={() => navigation.goBack()}
   >
    <Text style={styles.Text}>       Go back</Text>
  </TouchableOpacity>
  
  </View>
  
 
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
    
    View2:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'row'
      
                         
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
       borderWidth:3,
  
       borderRadius:30
  
    },
    Text:{
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
      alignContent:'center',
      justifyContent:'center'
  
  
    },
    button:{
      backgroundColor:'#1DB954',
      height:30,
      width:120,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
  
  })
