import { View, Text, StyleSheet, Alert, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude); // Corrected function name here
  } else {
    return rndNum;
  }
}


let minNum = 1
let maxNum = 100

const GameScreen = ({pickedNum,setGameOver,gameOverHandler}) => {
  const initialGuess = generateRandomBetween(1,100, pickedNum)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([])
  useEffect(()=>{
    if(currentGuess === pickedNum){
      minNum=1
      maxNum=100
      gameOverHandler(guessRounds.length)
    }
  },[currentGuess, pickedNum, setGameOver])

  useEffect(()=>{
    minNum=1,
    maxNum=100
  },[])

  const handeNextGuess = (direction)=>{

    if((direction == 'lower' && pickedNum < currentGuess )|| direction == 'higher' && pickedNum > currentGuess){
      Alert.alert(
        "Don't lie!",
        "You know that is wrong....",
        [{text:'Sorry', style:'cancel'}])
        return;
    }
    

    if(direction==='lower'){
      minNum = currentGuess+1
    }
    else{
      maxNum  = currentGuess-1
    }
   const newGuess = generateRandomBetween(minNum,maxNum,currentGuess)
   setCurrentGuess(newGuess)
   setGuessRounds((prv)=>[newGuess,...prv])
  }

  const guessListLength = guessRounds.length

  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={{marginBottom:15}}>
          <InstructionText style={{marginBottom:40}} >High or Low</InstructionText>
          <View style={styles.minusPlusContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={handeNextGuess.bind(this,'higher')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={handeNextGuess.bind(this,'lower')} >
                <Ionicons name="md-add-sharp" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.scroll}>
          <FlatList
          data={guessRounds}
          keyExtractor={(item)=> item}
          renderItem = {(itemData, index) => <GuessLogItem  round={guessListLength - itemData.index} guess={itemData.item}/>}
        />
        </View>
      </View>
      </ScrollView>
    
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingHorizontal:15,
    },
    button:{
      flex:1
    },
    minusPlusContainer:{
      flexDirection:'row'
    },
    scroll:{
      flex:1,
      margin:16,
    }
   
    
})