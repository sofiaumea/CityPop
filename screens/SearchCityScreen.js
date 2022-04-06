import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import CityPopLogo from '../components/CityPopLogo';

/**
 * Displays a text input where the user should type a city.
 * 
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo and the text input bar.
 */
export default function SearchCityScreen({ navigation: { navigate } }) {
  const [isLoading, setLoading] = useState(false);
  const [cityData, setData] = useState([]);

  //Parse the JSON file from the url. Takes the user input as city name.
  const fetchData = (cityinput) => {
    fetch(`http://api.geonames.org/searchJSON?q=${cityinput}&maxRows=1&username=weknowit`)
      .then((response) => response.json())
      .then((json) => setData(json))
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
    if(cityData !=0 && cityData.geonames[0] === undefined){
      Alert.alert("Oops..", "The city does not exist, try again");
      console.log('The city does not exist');
    }
    else{
      navigate('City', {
        population: cityData.geonames[0].population,
        name: cityData.geonames[0].name,
      })
    }
  }

  if (isLoading) {
    <Text>Loading...</Text>;
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <CityPopLogo home={() => navigate('Home') }/>
      <Text style={styles.text}>SEARCH BY CITY</Text>
      <View style={styles.inputbox}>
        <TextInput underlineColorAndroid = "transparent"
                  placeholder = "Enter a city.."
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
});