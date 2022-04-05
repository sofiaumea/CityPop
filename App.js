import * as React from 'react';
import HomeScreen from './HomeScreen.js';
import SearchCityScreen from './SearchCityScreen.js';
import SearchCountryScreen from './SearchCountryScreen.js';
import CityScreen from './CityScreen.js';
import CountryScreen from './CountryScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestSearchCity from './TestSearchCity.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="CitySearch" component={SearchCityScreen} options={{headerShown:false}} />
        <Stack.Screen name="CountrySearch" component={SearchCountryScreen} options={{headerShown:false}} />
        <Stack.Screen name="City" component={CityScreen} options={{headerShown:false}} />
        <Stack.Screen name="Country" component={CountryScreen} options={{headerShown:false}} />
        <Stack.Screen name="TestCity" component={TestSearchCity} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

