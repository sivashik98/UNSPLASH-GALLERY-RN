import React from "react";
import {StatusBar} from "react-native";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Gallery} from "../modules/Gallery";
import {ViewPhotoScreen} from "../modules/Gallery/screens/ViewPhotoScreen";


const RootStack = createNativeStackNavigator();

const NavigationFlow = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>

        <RootStack.Navigator
            initialRouteName="Gallery"
            screenOptions={{headerShown: false}}
        >
            <RootStack.Screen name={'Gallery'} component={Gallery}/>

            <RootStack.Screen name={'ViewPhoto'} component={ViewPhotoScreen}/>
        </RootStack.Navigator>
    </>
);

export const RootNavigation = () => {
    const navigationContainerRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

    return (
        <NavigationContainer ref={navigationContainerRef}>
            <NavigationFlow/>
        </NavigationContainer>
    );
};
