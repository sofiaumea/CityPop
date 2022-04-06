import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableOpacity } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading'
import ChooseCity from '../components/ChooseCity';
import ChooseCountry from '../components/ChooseCountry';

/**
 * Displays the first screen when entering the app. The user can choose
 * between either searching for a country or a city.
 * 
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo, a picture and two views.
 */
export default function HomeScreen({ navigation: { navigate } }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>CITYPOP</Text>
      
      <View style={{ flex: 1 }}>
        <ImageBlurLoading
          thumbnailSource={require('../assets/images/stad.png')}
          source={require('../assets/images/stad.png')}
          style={styles.imageCity}
        />
      </View>

      <ChooseCity city={() => navigate('CitySearch')}/>
      <ChooseCountry country={() => navigate('CountrySearch')}/>

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
    flex: 1,
    bottom: 20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});