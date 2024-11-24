import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />
        {/* <StatusBar   /> */}
        <Image source={require('../../assets/images/img/LoginBG.png')}
        style={{ width: "100%" , height: 500 }}
        />

        <View style={styles.subContainer}>

         <Text>Welcome to Gen-Image</Text>
         <Text style={{color:"grey"}}>Create AI Art in Just on Click</Text>

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
      flex: 1,
      justifyContent: 'center',
      // alignItems:'center',
    backgroundColor: 'lightgrey',

    }
})

