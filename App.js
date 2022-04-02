import * as React from 'react';
import HomeScreen from './HomeScreen.js';
import SearchCityScreen from './SearchCityScreen.js';
import SearchCountryScreen from './SearchCountryScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="City" component={SearchCityScreen} options={{headerShown:false}} />
        <Stack.Screen name="Country" component={SearchCountryScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

