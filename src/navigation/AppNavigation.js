import React from "react";

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import BottomTabs from "../navigation/BottomTabNavigation"

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{headerShown: false}}
                initialRouteName="Main"
            >
                <Stack.Screen name="Main" component={BottomTabs}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;