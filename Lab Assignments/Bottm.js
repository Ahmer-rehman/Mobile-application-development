import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-web'


export const Bottombar = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <View style={styles.bar}>
    <TouchableOpacity> 
        <Image style={styles.Image}source={{uri:'data:image/png;base64,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'}}></Image>
</TouchableOpacity>
<TouchableOpacity> 
        <Image style={styles.Image}source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_XtVZJKIkq4d8YeisaaQhRJGFEz-tpHA2yHrct7HVroKv0MoBMn3ylZI1ZcMIaxS7GM&usqp=CAU'}}></Image>
</TouchableOpacity>
<TouchableOpacity> 
        <Image style={styles.Image}source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM-LTZ0lSZOOYWoDCliS-EY_IuIE2E_lAkLvfI64gHWQQVL7tWOCAiI4nxlTE3L4ZHd4&usqp=CAU'}}></Image>
</TouchableOpacity>
    
        </View>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
   justifyContent: 'center',
   alignItems: 'center',
  },bar:{
    flexDirection:'row',
    backgroundColor:'',
    height:50,
    width:150,
    borderRadius:10,
    
    
     justifyContent: 'center',
    alignItems: 'center',
},
Image:{
    height:30,
    width:30,
    padding:10,
    borderRadius:10,
    margin:10
    
}
})