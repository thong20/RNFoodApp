//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// create a component
const TestCode = () => {
    const DATA = [
        {
            name: 'Stewed Mushrooms',
            image: require("./asset/namkho.jpg"),
            rating: 3,
            price: "$12"
        },
        {
            name: 'Jackfruit Fried',
            image: require("./asset/mitkho.jpg"),
            rating: 5,
            price: "$15"
        },
        {
            name: 'Noodles',
            image: require("./asset/hutieu.jpg"),
            rating: 4,
            price: "$20"
        },
        {
            name: 'Beef',
            image: require("./asset/cuonlalot.jpg"),
            rating: 2,
            price: "$12"
        },
        {
            name: 'Salad dressing',
            image: require("./asset/cuondiep.jpg"),
            rating: 5,
            price: "$13"
        },
    ];
    return (
        <View style={styles.container}>
            <Text>TestCode</Text>
            <FlatList 
                data={DATA}
                renderItem={({item}) => {}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TestCode;
