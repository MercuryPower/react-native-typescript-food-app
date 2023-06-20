import React from 'react';
import Header from "../components/Header";
import Categories from "../components/Categories";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {auth} from "../../data/firebase";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text:{
        fontSize:18,
    }
});
const HomeScreen = () => {
    const navigation = useNavigation();

     const handeSignOut = () =>{
        auth
            .signOut()
            .then(((): void => navigation.navigate('Login')))
            .catch(e => alert(e.message))
    }

    return (
        <View style={styles.container}>
            <Header />
            <Categories />
        </View>
    );
};


export default HomeScreen;