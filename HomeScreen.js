import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableOpacity } from 'react-native';import AppLoading from 'expo-app-loading';



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



export default function HomeScreen({ navigation: { navigate } }) {
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
      <Text style={styles.logo}>CITYPOP</Text>
      <Image source={require('./assets/images/stad.png')} style={styles.imageCity}/>

      <View style={styles.city}>
        <TouchableOpacity onPress={() => navigate('CitySearch')}> 
        <Text style={styles.text}>Search by city</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.country}>
        <TouchableOpacity onPress={() => navigate('CountrySearch')}> 
        <Text style={styles.text}>Search by country</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DECB',
    alignItems: 'center',

  },

  logo: {
    top: 60,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF6ED',
    fontSize: 50,
    shadowColor: 'rgba(123, 60, 0, 0.16)',
    shadowOffset: {height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },

  imageCity:{
    top: 80,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  city: {
    top: 100,
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

  country: {
    top: 140,
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