import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

const Card = ({children, style}) => {
  return (
    <View style={[styles.InputContainer,style]}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    InputContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary800,
        padding:16,
        marginTop:36,
        marginHorizontal:24,
        borderRadius:8,
        elevation:8,
        shadowColor:"black",    
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        
    },
})