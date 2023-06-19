import React from 'react';
import {Image, Linking, StyleSheet, TouchableHighlight, View} from "react-native";

const styles = StyleSheet.create({
    logo:{
        width:65,
        height:80,
    }
})
const Header = () => {
    return (
        <View>
            <TouchableHighlight onPress={() => {Linking.openURL('https://www.kfc.ru/')}}>
                <Image style={styles.logo} source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
            </TouchableHighlight>
        </View>

    );
};


export default Header;