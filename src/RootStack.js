
import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import Home from "./Home";
import Detail from "./Detail";

const Stack = createStackNavigator();
export default function RootStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
