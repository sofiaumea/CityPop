import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

{/*The user navigates to country search by clicking the text*/}
export default function ChooseCountry ({ country }){
  return (
    <View style={styles.country}>
      <TouchableOpacity onPress={country}> 
      <Text style={styles.text}>Search by country</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    bottom: 70,
    width: 250,
    height: 70,
    backgroundColor: '#F8EEE4', 
    borderRadius: 35,
    shadowColor: 'rgba(123, 60, 0, 0.16)',
    shadowOffset: {height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Montserrat_300Light',
  },
})