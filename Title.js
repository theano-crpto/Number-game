import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

function Title({children}) {
  return (
    <View>
      <Text style={styles.title}> {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
    },
});
export default Title;