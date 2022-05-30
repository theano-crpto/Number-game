import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native'
import PrimaryButton from '../Components/PrimaryButton';

    function StartGame({onPickNumber}){
        const [enteredNumber, setEnteredNumber] = useState('');
        
        function numberInputHandler(enteredText) {
            setEnteredNumber(enteredText);
        }
        function resetInputHandler(){
            setEnteredNumber('');
        }
        function confirmInputHandler() {
            const chosenNumber = parseInt(enteredNumber);
            if (isNaN(chosenNumber)|| chosenNumber<=0 || chosenNumber>99)
            {
            Alert.alert('Invalid Number', 'Number has to be between 1 to 99',
            [{text:'Okay', style:'destructive', onPress:resetInputHandler}]);
              return;
            }
                onPickNumber(chosenNumber);
        }
    return (
        <View style={styles.inputContainer}>
           <TextInput style={styles.TextInput} 
           maxLength={2}
            keyboardType="number-pad"
           onChangeText={numberInputHandler}
           value={enteredNumber}
           />
           <View style={styles.ButCont}>
            <View style={styles.Button}>
           <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
           </View>
           <View style={styles.Button}>
           <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
           </View>
           </View>
        </View>
    );
}

export default StartGame;
const styles = StyleSheet.create({
    inputContainer: { 
        justifyContent:'center',  
        alignItems:'center',
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:'#4e0329',
        borderRadius:10,
        elevation:8,
        },
        TextInput:{
         height:50,
         width:50,
         textAlign:'center',
         fontSize:32,
         borderBottomColor:'#ddb52f',
         borderBottomWidth:2,
         color:'#ddb52f',
         marginVertical:8,
         fontWeight:'bold',
        },
        ButCont:{
            flexDirection:'row',
        },
        Button:{
            flex:1,
        }

});
