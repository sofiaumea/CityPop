import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import CityPopLogo from '../components/CityPopLogo';


/**
 * Displays the cities in the country chosen in order of population
 * 
 * @param {Object} route object to reach the parameters from previous screen
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo and the cities
 */
export default function CountryScreen({ route, navigation: { navigate } }) {
  const {data} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <CityPopLogo home={() => navigate('Home') }/>
      <Text style={styles.countrylogo}>{data.geonames[0].countryName}</Text>
      
      {/*Iterate through data containing city names*/}
      <View>
      {data.geonames.map((city,i) => {
          return (
            <View style={styles.textbox} key={i}>
              <TouchableOpacity onPress={() => navigate('CountryToCity', {input: city.name})}> 
                <Text style={styles.cityname}>{city.name}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DECB',
  },

  city: {
    bottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#000000',
  },

  cityname: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: '#000000',
  },

  populationtext: {
    top: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: '#000000',
  },

  countrylogo: {
    top: 180,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 25,
    color: '#d28471',
  },

  textbox: {
    marginTop: 20,
    top: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
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
});