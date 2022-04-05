import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import AppLoading from 'expo-app-loading';

//Från countryscreen ska vi navigera till cityscreen och få upp populationen för den staden
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import TestSearchCity from './TestSearchCity';



export default function CountryScreen({ route, navigation: { navigate } }) {
  const {data} = route.params;



  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return (
      <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => navigate('Home')}> 
        <Text style={styles.logo}>CITYPOP</Text>
      </TouchableOpacity>

      <Text style={styles.countrylogo}>{data.geonames[0].countryName}</Text>
      
      {/*Iterate through data containing city names*/}
      <View>
      {data.geonames.map(city => {
          return (
            <View style={styles.textbox}>
              <TouchableOpacity onPress={() => navigate('TestCity', {input: city.name})}> 
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

  logo: {
    left: 10, 
    top: 10,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF6ED',
    fontSize: 20,
    shadowColor: 'rgba(123, 60, 0, 0.16)',
    shadowOffset: {height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
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

  input: {
      fontFamily: 'Montserrat_300Light',
  },

});