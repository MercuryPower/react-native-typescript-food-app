import React from 'react';
import {Image, Linking, LogBox, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {SIZES, COLORS} from "../../constants";
import LoginScreen from "../screens/LoginScreen";
import {auth} from "../../data/firebase";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.brend}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.kfc.ru/')}}>
                    <Image style={styles.logo} source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
                </TouchableOpacity>
                <View style={{alignItems:'flex-start', paddingLeft:10,}}>
                    <Text style={{fontSize: SIZES.font}}>BFG Restaurant</Text>
                    <Text style={{fontSize: SIZES.small, backgroundColor:COLORS.primary, color:'white'}} >Very tasty!</Text>
                </View>
            </View>
            <View style={{marginRight:25,alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.user} source={require('../../assets/user.png')} />
                </TouchableOpacity>
                <Text>{auth.currentUser?.email}</Text>
                <TouchableOpacity onPress={(handeSignOut) => {}}>
                    <Text style={{marginTop:10, padding:5,borderRadius:10, borderWidth:1, }}>Выйти</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:50,
    },
    brend:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:25,
    },
    logo:{
        width:73,
        height:90,
    },
    user:{
        width:55,
        height:55,
    },
})

export default Header;