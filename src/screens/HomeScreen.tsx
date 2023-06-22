import React, {useContext, useState} from 'react';
import Header, {GlobalNightMode} from "../components/Header";
import Categories from "../components/Categories";
import {ScrollView, StyleProp, StyleSheet, TextStyle, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {auth} from "../../data/firebase";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../StackNavigator";
import Popular from "../components/Popular";
import Location from "../components/Location";
import {COLORS} from "../../constants";

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export interface NightModeProps {
    nightMode?: boolean,
    toggleNightMode?: () => void
}
const HomeScreen = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <Header/>
            <Categories />
            <Popular />
            <Location />
        </ScrollView>
    );
};
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        fontSize:18,
    }
});

export default HomeScreen;