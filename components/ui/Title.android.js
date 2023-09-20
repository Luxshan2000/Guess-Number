import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { Children } from 'react'

const Title = ({children}) => {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title


const styles = StyleSheet.create({
    title:{
        fontFamily : 'open-sans-bold' ,
        fontSize:24,
        color:'white',
        textAlign:'center',
        // borderWidth:Platform.OS == 'android' ? 2 :0,
        // borderWidth : Platform.select({android:2, ios:0}),
        borderWidth: 2,
        borderColor:'white',
        padding:12
      }
})