import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React,{useState} from 'react';
import Title from '../Components/Title';
import NumberContainer from '../Components/game/umberContainer';
import PrimaryButton from '../Components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundary = 1;
  let maxBoundary = 100;

function GameScreen({UserNumber}){
    const intialGuess = generateRandomBetween(minBoundary, maxBoundary, UserNumber )
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    function nextGuessHandler(){
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }
        else{
            minBoundary = currentGuess+1;
            const newRndNumber =   generateRandomBetween(minBoundary, maxBoundary, currentGuess);
            setCurrentGuess(newRndNumber);

        }
    }
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
      {/* <Text style={styles.title}>Opponent's Guess</Text> */}
       <NumberContainer>{currentGuess}</NumberContainer>
      <View>
          <Text>
              Higher or lower
          </Text>
          <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower') }>-</PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
          </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:50,
    },
    
});

export default GameScreen;