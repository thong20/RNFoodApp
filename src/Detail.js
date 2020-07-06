import React from 'react';
import {View, Text} from 'react-native';

const consoleLog = (n) => console.log(`===== Detail.js - line: ${n} =====`)

export default function Detail({navigation, route}){
    // console.log('route.params:', route.params)
    // consoleLog(8)
    return(
        <View>
            <Text>This is Detail Component</Text>
        </View>
    )
}