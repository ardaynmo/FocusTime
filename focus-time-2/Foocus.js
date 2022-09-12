import React, { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from './RoundedButton';

export const Focus = ( { addSubject }) => { 
  const [subject, setSubject] = useState(null)
  return(
  <View>
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.text}
        onChangeText={setSubject}
        label="what would you like to focus on?"
      />
      <View style={styles.button} >
      <RoundedButton onPress={() => addSubject(subject)}  title="+" size={50} />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 0.5,
    padding: 25,
    justifyContent:'top',
     flexDirection: "row",
    flexWrap: "wrap",
  },
  button:{
      justifyContent: 'center',

  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 13,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 2,
    fontFamily: 'cursive',
    width:220,
    marginRight:10,
  },
});
