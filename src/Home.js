import React from 'react';
import {
    View, Text, StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import All from './home_child/All'
import Menu from './home_child/Menu'
import Popular from './home_child/Popular'

const consoleLog = (n) => {
    console.log(`===== Home.js - line: ${n} =====`)
}

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/header.png')}
                    style={styles.imageBackground}
                    resizeMode='contain'
                >
                    <Text style={styles.title}>HOME</Text>
                </ImageBackground>
            </View>
            <View style={styles.tabbar}>
                <ScrollableTabView
                    style={{ marginTop: 20 }}
                    initialPage={0}
                    tabBarActiveTextColor='green'
                    // tabBarTextStyle={{fontSize: 20}}
                    renderTabBar={() => <DefaultTabBar underlineStyle={{
                        backgroundColor: 'green',
                    }} />}
                >
                    <All tabLabel='All' navigation={navigation}/>
                    <Menu tabLabel='Menu' navigation={navigation} />
                    <Popular tabLabel='Popular' navigation={navigation} />
                </ScrollableTabView>
            </View>
        </View>
    )
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    header: {
        marginTop: 20,
        position: 'absolute'
    },
    tabbar: {
        flex: 1,
        marginTop: width * 0.3,
        paddingHorizontal: 15,
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25,
    }
})