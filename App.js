import * as React from 'react';
import AppLoading from 'expo-app-loading';
import HomeScreen from './screens/HomeScreen.js';
import SearchCityScreen from './screens/SearchCityScreen.js';
import SearchCountryScreen from './screens/SearchCountryScreen.js';
import CityScreen from './screens/CityScreen.js';
import CountryScreen from './screens/CountryScreen.js';
import CountryToCityScreen from './screens/CountryToCityScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_700Bold} from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="CitySearch" component={SearchCityScreen} options={{headerShown:false}} />
        <Stack.Screen name="CountrySearch" component={SearchCountryScreen} options={{headerShown:false}} />
        <Stack.Screen name="City" component={CityScreen} options={{headerShown:false}} />
        <Stack.Screen name="Country" component={CountryScreen} options={{headerShown:false}} />
        <Stack.Screen name="CountryToCity" component={CountryToCityScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


