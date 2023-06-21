import React from 'react';
import Header from "../components/Header";
import Categories from "../components/Categories";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {auth} from "../../data/firebase";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../App";


export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const HomeScreen = () => {



    return (
        <View style={styles.container}>
            <Header />
            <Categories />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text:{
        fontSize:18,
    }
});

export default HomeScreen;