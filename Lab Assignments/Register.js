import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'


/**
* @author
* @function Register
**/
export const Register = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
const setValueLocally=()=>{
      AsyncStorage.setItem('name', name);
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('phone', phone);
      AsyncStorage.setItem('password', password);
      navigation.navigate("Login");
      console.log("data saved");   
    }

const { container } = styles
 return(
  <View style={container}>
    
  <Image style={{height:300,width:400,}} source={{uri:'https://1000logos.net/wp-content/uploads/2017/08/Color-Spotify-Logo.jpg'}}></Image>  
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='First name'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  placeholder='Last name'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Email'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Password'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Confirm Password'
  keyboardType='name-phone-pad'></TextInput>
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text}>           Submit</Text>
  </TouchableOpacity>
 
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
      fontFamily:'Yatra-One',
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
