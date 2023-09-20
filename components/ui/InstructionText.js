import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

function InstructionText({children, style}) {
  
    return (
        <Text style={[styles.ins, style]}>{children}</Text>
    )
}


export default InstructionText


const styles = StyleSheet.create({
    ins:{
        color:colors.accent200,
        fontSize:24,
        fontFamily:'open-sans'
      }
})