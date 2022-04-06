import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import CityPopLogo from '../components/CityPopLogo';

/**
 * Displays the population size after clicking on a city in the chosen country
 * 
 * @param {Object} route object to reach the parameters from previous screen
 * @param {*} navigation object to be able to link to other screens
 * @returns {SafeAreaView} a window that views the logo and the population info
 */
export default function CountryToCityScreen({route, navigation: { navigate } }) {
  const {input} = route.params;

  const [isLoading, setLoading] = useState(false);
  const [cityData, setData] = useState([]);

  //Parses the JSON file from the url. Input is a parameter from previous screen.
  useEffect(() => {
    fetch(`http://api.geonames.org/searchJSON?q=${input}&maxRows=1&username=weknowit`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    <View style={styles.textbox}>
      <Text>Loading...</Text>;
    </View>
  }


  return (
    <SafeAreaView style={styles.container}>
      <CityPopLogo home={() => navigate('Home') }/>
      <Text style={styles.citylogo}>THE CITY..</Text>
      <View style={styles.textbox}>
        <Text style={styles.city}>{input}</Text>
        <Text style={styles.text}>has a population size of</Text>

        {/*Gets the amount of people living in the city*/}
        <FlatList
          data={cityData.geonames}
          keyExtractor={({ population }) => population}
          renderItem={({ item }) => (
            <Text style={styles.populationtext}>{item.population} people</Text>
          )}
        />
        
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
    top: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#000000',
  },

  text: {
    top: 70,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_300Light',
    fontSize: 10,
    color: '#000000',
  },

  populationtext: {
    top: 100,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: '#000000',
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
});