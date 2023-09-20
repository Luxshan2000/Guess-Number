import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

const GuessLogItem = ({round, guess}) => {
  return (
    <View style={styles.logList}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess} </Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    logList:{
        borderColor:colors.primary800,
        borderWidth:2,
        borderRadius:10,
        flexDirection:'row',
        marginVertical:2,
        padding:8,
        backgroundColor:colors.accent200,
        width:'100%',
        justifyContent:'space-between',
        elevation:3,
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    text:{
        flex:1,
        fontFamily:'open-sans'
    }
})