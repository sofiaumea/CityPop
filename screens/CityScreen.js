import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CityPopLogo from '../components/CityPopLogo';

/**
 * Displays the population size of the given city.
 * 
 * @param {Object} route object to reach the parameters from previous screen
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo and the population info
 */
export default function CityScreen({ route, navigation: { navigate } }) {
  const {population, name} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <CityPopLogo home={() => navigate('Home') }/>
      <Text style={styles.citylogo}>THE CITY..</Text>

      {/*Prints out the name and population from the JSON file*/}
      <View style={styles.textbox}>
        <Text style={styles.city}>{name}</Text>
        <Text style={styles.text}>has a population size of</Text>
        <Text style={styles.populationtext}>{population} people</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DECB',
  },

  citylogo: {
    top: 180,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 25,
    color: '#d28471',
  },

  textbox: {
    top: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 250,
    height: 200,
    backgroundColor: '#F8EEE4', 
    borderRadius: 35,
    shadowColor: 'rgba(123, 60, 0, 0.16)',
    shadowOffset: {height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  city: {
    bottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#000000',
  },

  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_300Light',
    fontSize: 10,
    color: '#000000',
  },

  populationtext: {
    top: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: '#000000',
  },
});