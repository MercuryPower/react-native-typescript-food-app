import React, {useEffect, useState} from 'react';
import {Image, Linking, LogBox, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {SIZES, COLORS} from "../../constants";
import {auth} from "../../data/firebase";
import firebase from "firebase/compat";
import {useNavigation} from "@react-navigation/native";
import {globalStyles, HomeScreenNavigationProp} from "../screens/HomeScreen";

interface HeaderProps{
    auth?: firebase.auth.Auth
}

const Header: React.FC<HeaderProps>= () => {
    const [nightMode, setNightMode] = useState(false) // Попробовать допилить NightMode
    const imageNightSource = nightMode ? require('../../assets/toogle1.png') : require('../../assets/toogle2.png')

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const navigation = useNavigation<HomeScreenNavigationProp>();

    useEffect(() => {
        return auth.onAuthStateChanged((user: firebase.User | null) => {
            if (user) {
                setIsUserAuthenticated(true);
            } else {
                setIsUserAuthenticated(false);
            }
        })
        }, []);
    const truncateText = (email: string | null | undefined, maxLength: number = 6) => {
        if(!email){
            return '';
        }
        const [username, domain] = email.split('@');
        if (username.length <= maxLength) {
            return email;
        }
        const truncatedUsername = username.substring(0, maxLength) + '...';
        return truncatedUsername + '@' + domain;
    };
    const handleSignOut = () =>{
        auth
            .signOut()
            .then(((): void => setIsUserAuthenticated(false)))
            .catch(e => alert(e.message))
    }
    const handleSignIn = () =>{
        navigation.navigate('Login')
    }
    const handleUserInfo = () =>{
        navigation.navigate('Personal')
    }
    return (
        <View style={[styles.container, ]}>
            <View style={styles.brend}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.kfc.ru/').catch(error => alert(error.message))}}>
                    <Image style={styles.logo} source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
                </TouchableOpacity>
                <View style={{alignItems:'flex-start', paddingLeft:10}}>
                    <Text style={{fontSize: SIZES.font}}>BFG Restaurant</Text>
                    <Text style={{fontSize: SIZES.small, padding:1, backgroundColor:COLORS.primary, color:'white'}} >Very tasty!</Text>
                </View>
            </View>
            <View style={{marginRight:25, alignItems:'center', justifyContent:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {handleUserInfo()}}>
                        <Image style={styles.user} source={require('../../assets/user.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNightMode(previousState => !previousState)}>
                            <Image style={{width:39, height:20}} source={imageNightSource} />
                    </TouchableOpacity>
                </View>
                {isUserAuthenticated ? (
                    <>
                    <Text numberOfLines={1} ellipsizeMode="tail">{truncateText(auth.currentUser?.email, 6)}</Text>
                        <TouchableOpacity  style={{marginTop:5, padding: 5,borderRadius:10,  borderWidth:1, }} onPress={() => {handleSignOut()}}>
                            <Text>Sign Out</Text>
                        </TouchableOpacity>
                    </>
                    ) : (
                    <TouchableOpacity style={{marginTop:5, padding: 5,borderRadius:10,  borderWidth:1, }} onPress={() => {handleSignIn()}}>
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                    )}
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