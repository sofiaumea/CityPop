import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';


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


//För staden kan vi hämta ut först population bara
const cityURL = 'http://api.geonames.org/searchJSON?q=london&maxRows=1&username=weknowit';


export default function CityScreen({ navigation: { navigate } }) {

  //Här ska vi läsa av om staden finns i JSON, sedan visas error-meddelande eller en ny sida visas
 function setInput(value) {
  var countryinput = value.nativeEvent.text
  checkCity(countryinput)
}
  function checkCity(input){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    
  }

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
      <Text style={styles.text}>SEARCH BY CITY</Text>
      <View style={styles.inputbox}>
      <TextInput underlineColorAndroid = "transparent"
               placeholder = "Enter a city.."
               autoCapitalize = "none"
               onSubmitEditing={setInput}
               keyboardType="default"/>
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

  text: {
    top: 180,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 25,
    color: '#d28471',
  },

  inputbox: {
    top: 230,
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