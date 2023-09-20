import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer


const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.accent200,
        padding:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        margin:24
    },
    numberText:{
        color:colors.accent200,
        fontSize:36,
        fontFamily:'open-sans-bold'
    }
})