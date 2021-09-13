import React from "react";
import { View, TouchableOpacity, Text, Image, Platform } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//screen components
import Home from "../components/home/Home"

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
    // console.log('state: ', state);
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            paddingBottom: Platform.OS == "ios" ? 45 : 20,
            justifyContent: 'space-evenly',
            paddingTop: 20,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
        }}
        >
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const label = route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };


                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={route.key}
                        onPress={onPress}
                        style={isFocused ? {
                            flexDirection: 'row',
                            alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)',
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            borderRadius: 20,
                        } : {
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        {options.tabBarIcon.call(this, isFocused)}
                        <Text style={{ color: 'white', paddingLeft: 6, fontWeight: '600', fontSize: 17 }}>
                            {isFocused ? label : ""}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarIcon: () => <></>
            }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="Explore" component={Home}
                options={{
                    tabBarIcon: (focused) => (
                        <Image source={require("../assets/icon/explore.png")} style={{ width: 30, height: 30, tintColor:focused ? 'white':'black' }} />
                    )

                }}
            />
            <Tab.Screen name="Menu" component={Home}
                options={{
                    tabBarIcon: (focused) => (
                        <Image source={require("../assets/icon/menu.jpg")} style={{ width: 30, height: 30, tintColor:focused ? 'white':'black' }} />
                    )

                }} />
            <Tab.Screen name="Cart" component={Home}
                options={{
                    tabBarIcon: (focused) => (
                        <Image source={require("../assets/icon/cart.jpg")} style={{ width: 30, height: 30, tintColor:focused ? 'white':'black' }} />
                    )

                }} />
            <Tab.Screen name="User" component={Home}
                options={{
                    tabBarIcon: (focused) => (
                        <Image source={require("../assets/icon/user.jpg")} style={{ width: 30, height: 30, tintColor:focused ? 'white':'black' }} />
                    )

                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;