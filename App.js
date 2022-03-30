import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>CITYPOP</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/images/stad.png')} style={styles.imageCity}/>
      <View style={styles.city}>
          <Text style={styles.textcity}>Search by city</Text>
      </View>
      <View style={styles.country}>
        <Text style={styles.textcity}>Search by country</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DECB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    bottom: 70,
    fontFamily: 'Montserrat-ExtraeBold',
    color: '#FFF6ED',
    fontSize: 50,
    shadowColor: 'rgba(123, 60, 0, 0.16)',
    shadowOffset: {height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },

  imageCity:{
    bottom: 30,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  city: {
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
    fontFamily: 'Montserrat-Light',
  },

  country: {
    top: 50,
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
    fontFamily: 'Montserrat-Light',
  },

});
