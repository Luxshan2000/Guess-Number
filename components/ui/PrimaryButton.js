import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'
const PrimaryButton = ({children, onPress}) => {
  
  return (
  <View  style={styles.outterContainer} >
    <Pressable style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed] :styles.innerContainer} android_ripple={{color:colors.primary600}}  onPress={onPress}  >
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
    
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  innerContainer:{
    paddingVertical:8,
    paddingHorizontal:16,
    
    backgroundColor:colors.primary500,
    elevation:2,
  },
  outterContainer:{
    borderRadius:28,
    overflow:'hidden',
    margin:4,
    
    
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  },
  pressed:{
    opacity:0.75
  }
});