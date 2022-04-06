import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import CityPopLogo from '../components/CityPopLogo';


/**
 * Displays a text input where the user should type a country.
 * 
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo and the text input bar.
 */
export default function SearchCountryScreen({ navigation: { navigate } }) {
  const [isLoading, setLoading] = useState(false);
  const [countryData, setData] = useState([]);

  const fetchData = (countryinput) => {
    fetch(`http://api.geonames.org/searchJSON?q=${countryinput}&maxRows=3&featureClass=P&orderby=population&username=weknowit`)
      .then((response) => response.json())
      .then((json) =>  setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true); 
    fetchData();
  }, []);

  //Shows an error message to the user if country does not exist, 
  //otherwise navigate to next screen.
  const navigateToScreen  = () => {
    if(countryData !=0 && countryData.geonames[0] === undefined){
      Alert.alert("Oops..", "The country does not exist, try again");
      console.log('The country does not exist');
    }
    else{
      navigate('Country', {
      data: countryData,
      })
    }
  }

  if (isLoading) {
    <View style={styles.inputbox}>
      <Text>Loading...</Text>;
    </View>
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <CityPopLogo home={() => navigate('Home') }/>
      <Text style={styles.text}>SEARCH BY COUNTRY</Text>
      <View style={styles.inputbox}>
        <TextInput underlineColorAndroid = "transparent"
                  placeholder = "Enter a country.."
                  autoCapitalize = "none"
                  onChangeText={text => fetchData(text)}
                  onSubmitEditing={navigateToScreen}
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