import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
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

export default function TestSearchCity({route, navigation: { navigate } }) {
  const {input} = route.params;
  const [isLoading, setLoading] = useState(false);
  const [cityData, setData] = useState([]);

  useEffect(() => {
    fetch(`http://api.geonames.org/searchJSON?q=${input}&maxRows=1&username=weknowit`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    <Text>Loading...</Text>;
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
        <Text style={styles.citylogo}>THE CITY..</Text>
        <View style={styles.textbox}>
          <Text style={styles.city}>{input}</Text>
          <Text style={styles.text}>has a population size of</Text>
          <FlatList
            data={cityData.geonames}
            keyExtractor={({ population }, index) => population}
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
    
      input: {
          fontFamily: 'Montserrat_300Light',
      },
});