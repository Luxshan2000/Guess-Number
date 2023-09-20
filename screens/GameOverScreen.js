import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import colors from '../constants/Colors'

const GameOverScreen = ({startNewgame, roundsNum, pickedNum}) => {
  
  return (
    <View style={styles.root} >
      <Title>GAME OVER!</Title>
      <View style={styles.imgCon}>
        <Image style={styles.img} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summarytext}>Your phone needed <Text style={styles.highlight}>{roundsNum}</Text> round to guess 
      <Text style={styles.highlight}>{pickedNum}</Text></Text>
      <PrimaryButton onPress={startNewgame} >Start New game!</PrimaryButton>
    </View>
  )
}

export default GameOverScreen


const devicewidth = Dimensions.get('window').width
const styles =StyleSheet.create({
  imgCon:{
    width:devicewidth < 380 ? 150 :300,
    height:devicewidth < 380 ? 150 :300,
    borderRadius:devicewidth < 380 ? 75 :150,
    overflow:'hidden',
    borderWidth:2,
    borderColor:colors.primary500,
    margin:36
  },
  img:{
    height:'100%',
    width:'100%'
  },
  root:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  summarytext:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center',
    marginBottom:15
  },
  highlight:{
    fontFamily:'open-sans-bold',
    color:colors.primary500
  }
})