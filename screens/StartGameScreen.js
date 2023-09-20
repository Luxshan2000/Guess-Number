import { View, TextInput, StyleSheet, Alert, Text, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({setPickedNum}) => {
  const [num,setNum] = useState('');

  const {width, height} = useWindowDimensions()
  const handleNumInput = (data)=>{
    setNum(data)
  }
  const handleConfirm =()=>{
    const intNum = parseInt(num)
    
    if(isNaN(intNum) || intNum<=0 || intNum>99  ){
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 to 99",
        [{text:'okay', style:'destructive', onPress:handleReset}]
      )
      return
    }
    
    setPickedNum(intNum)
    
  }
  const handleReset =()=>{
    setNum('')
  }
  const marginTop= height < 420 ? 30: 120
  console.log(height)
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='padding'>
      <View style={[styles.rootContainer, {marginTop:marginTop}]}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter number</InstructionText>
            <TextInput 
              style={styles.NumberInput} 
              maxLength={2} 
              keyboardType='number-pad'
              value={num}
              onChangeText={handleNumInput} />
            <View style={styles.buttonContainer}> 
              <View style={styles.button}>
                <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
              </View>
            </View> 
        </Card>
      </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}


// const deviceheight = Dimensions.get('window').height
const styles = StyleSheet.create({
   
    rootContainer:{
      flex:1,
      // marginTop:deviceheight < 600 ? 10: 120,
      alignItems:'center'
    },

    screen:{
      flex:1
    },
    
    NumberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:colors.accent200,
        borderBottomWidth:2,
        color:colors.accent200,     
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonContainer:{
      flexDirection:'row',
    },
    button:{
      flex:1
    }
})

export default StartGameScreen