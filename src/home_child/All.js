//import liraries
import React , { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const consoleLog = (n) => {
    console.log(`===== All.js - line: ${n} =====`)
}

// create a component
const All = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const DATA = [
        {
            name: 'Stewed Mushrooms',
            image: require("../../assets/namkho.jpg"),
            rating: 3,
            price: "$12"
        },
        {
            name: 'Jackfruit Fried',
            image: require("../../assets/mitkho.jpg"),
            rating: 5,
            price: "$15"
        },
        {
            name: 'Noodles',
            image: require("../../assets/hutieu.jpg"),
            rating: 4,
            price: "$20"
        },
        {
            name: 'Beef',
            image: require("../../assets/cuonlalot.jpg"),
            rating: 2,
            price: "$12"
        },
        {
            name: 'Salad dressing',
            image: require("../../assets/cuondiep.jpg"),
            rating: 5,
            price: "$13"
        },
    ];

    const _rating = (rate) => {
        const rating = [];
        for (let i = 1; i <= rate; i++) {
            rating.push(
                <Image key={i} source={require('../../assets/star.png')} style={{ width: 20, height: 20 }} />
            )
        }
        return rating;
    }

    const renderItem = ({ item }) => {

        return (
            <View style={styles.item}>
                <Image source={item.image} style={styles.images} />
                <View style={styles.content}>
                    <Text style={styles.nameItem}>{item.name}</Text>
                    <View style={styles.rating}>
                        {_rating(item.rating)}
                    </View>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Detail', {
                        name: item.name,
                        rating: item.rating,
                        price: item.price
                    })}
                >
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <TextInput
                    placeholder='Search...'
                    style={styles.searchBar}
                    value={search}
                    onChangeText={(text)}
                />
            </View>
            <View style={styles.flatList}>
                {/* <Image source={data[3].image} style={{width: 80, height: 80}}/> */}
                <FlatList
                    data={DATA}
                    // renderItem={({item}) => {}}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    // ItemSeparatorComponent={itemSeparatorComponent}
                    // horizontal={true}
                    showsVerticalScrollIndicator={true}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {

    },
    flatList: {
        flex: 1
    },
    item: {
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5,
        margin: 8,

        // shadow style
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    images: {
        width: 100,
        height: 100,
        borderRadius: 10,

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    nameItem: {
        fontSize: 18
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
    },
    button: {
        marginTop: 5,
        marginRight: 5,
        backgroundColor: '#00a147',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    price: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    section: {
        // borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    searchBar: {
        fontSize: 18
    }
});

//make this component available to the app
export default All;
