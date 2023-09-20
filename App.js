import { ImageBackground, StyleSheet, SafeAreaView, Platform} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [pickedNum,setPickedNum] = useState()
  const [gameOver, setGameOver] = useState(false)
  const [guessRound, setGuessRound] = useState(0)


  const gameOverHandler = (lenght)=>{
      setGuessRound(lenght)
      setGameOver(true)
    }

  const startNewgame= ()=>{
    setGameOver(false)
    setPickedNum('')
    setGuessRound(0)
  }
  

  const [fontsLoaded] = useFonts({
    'open-sans': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }


  let screen = <StartGameScreen setPickedNum={setPickedNum} />
  

  if(pickedNum){
    screen = <GameScreen gameOverHandler={gameOverHandler} setGameOver={setGameOver} pickedNum={pickedNum} />
  }
  if(gameOver && pickedNum){
    screen = <GameOverScreen roundsNum={guessRound} pickedNum={pickedNum} startNewgame={startNewgame} />
  }
  return (
    <>
    <StatusBar style='light' />
    <LinearGradient colors={[colors.primary700,colors.accent200]} style={styles.rootScreen}>
      <ImageBackground 
        style={styles.rootScreen} 
        resizeMode='cover' 
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundOpacity}>
        <SafeAreaView style={styles.safeArea}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    paddingTop:Platform.OS ==="android" ? 50 :0
  },
  rootScreen:{
    flex:1
  },
  backgroundOpacity:{
    opacity:0.15
  }
});


// expo install packagename 