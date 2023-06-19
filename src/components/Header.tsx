import React from 'react';
import {Image, Linking, LogBox, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {SIZES, COLORS} from "../../constants";

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
        marginRight:25,
    },
})
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.brend}>
                <TouchableHighlight onPress={() => {Linking.openURL('https://www.kfc.ru/')}}>
                    <Image style={styles.logo} source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
                </TouchableHighlight>
                <View style={{alignItems:'flex-start', paddingLeft:10,}}>
                    <Text style={{fontSize: SIZES.font}}>BFG Restaurant</Text>
                    <Text style={{fontSize: SIZES.small, backgroundColor:COLORS.primary, color:'white'}} >Very tasty!</Text>
                </View>
            </View>
            <View>
                <Image style={styles.user} source={require('../../assets/user.png')} />
            </View>
        </View>

    );
};


export default Header;