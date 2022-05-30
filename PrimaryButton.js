import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function PrimaryButton ({children, onPress})  {
   
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
      style={({pressed}) =>
        pressed
        ?  [styles.buttonInnerContainer, styles.pressed]
        : styles.buttonInnerContainer
        } 
      onPress={onPress} 
      android_ripple={{color:'#640233'}}>
      <Text style={styles.ButtonText}>{children}</Text>
    </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:5,
    },
    buttonInnerContainer:{
        paddingVertical:8,
        paddingHorizontal:16,
       
    },
    ButtonText:{
        color:'white',
        textAlign:'center'
    }
});

export default PrimaryButton;