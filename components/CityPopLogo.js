import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function CityPopLogo ({ home }){
    return (
        <TouchableOpacity onPress={home}> 
            <Text style={styles.logo}>CITYPOP</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
})