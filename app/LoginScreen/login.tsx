import { StyleSheet, Text, View , Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Colors from '../Constants/Colors'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />
        {/* <StatusBar   /> */}
        <Image source={require('../../assets/images/img/LoginBG.png')}
        style={{ width: "100%" , height: 500 }}
        />

        <View style={styles.subContainer}>

         <Text style={{color: 'black' , fontWeight: 'bold' , fontSize: 27 , textAlign: 'center'}}>Welcome to Gen-Image</Text>
         <Text style={{color: Colors.GRAY  , textAlign: 'center'}}>Create AI Art in Just one Click</Text>

    <TouchableOpacity 
    activeOpacity={0.8}
    style={styles.button}>
      <Text style={{color: "white" ,fontWeight: 'semibold', fontSize: 19,}}>Continue</Text>
    </TouchableOpacity>

    <Text style={{textAlign:'center' , color: Colors.GRAY}}>By continuing you agree to our T&C</Text>
        </View>

 
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: 15,
        // backgroundColor: 'green'
    },
    subContainer:{
    height: 210,
    justifyContent:  'space-between' ,
    backgroundColor: 'white',
    padding: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // paddingBottom: 1,
   
    },
    button:{
    backgroundColor:'black',
    padding: 10, 
    borderRadius:30,
    height: 50,
    width: "100%",
    justifyContent:'center', //justifyContent for top to bottom
    alignItems:'center',  
     
    
    }
})

