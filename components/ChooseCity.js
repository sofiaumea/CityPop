import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


{/*The user navigates to city search by clicking text*/}
export default function ChooseCity ({ city }){
    return (
        <View style={styles.city}>
        <TouchableOpacity onPress={city}> 
        <Text style={styles.text}>Search by city</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    city: {
        bottom: 100,
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

    text: {
        fontFamily: 'Montserrat_300Light',
    },
})