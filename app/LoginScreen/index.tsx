import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />
        {/* <StatusBar   /> */}
        <Image source={require('../../assets/images/LoginBG.png')}
        style={{height: "100%" }}
        />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})