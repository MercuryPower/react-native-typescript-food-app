import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {auth} from "../../data/firebase";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../StackNavigator";


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<LoginScreenNavigationProp>();


    const handleSignUp = () => {
       auth
           .createUserWithEmailAndPassword(email, password)
           .then(userCredentials => {
               const user = userCredentials.user;
           })
           .catch(error => alert(error.message))
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home');
                setPassword('')
                setEmail('')
            }
        });
    }, [])
    const handleLogin = () =>{
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Image style={styles.logo} source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
            <Text style={styles.title}>Авторизация / Регистрация</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={'Email'} value={email} onChangeText={text => {setEmail(text)}} ></TextInput>
                <TextInput style={styles.input} placeholder={'Password'} value={password} onChangeText={text => {setPassword(text)}} secureTextEntry></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:SIZES.h2,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        borderBottomWidth:1,
        flexDirection:'row',
        marginTop:15,
        padding:5,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    buttonContainer:{
        width:'60%',
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:'70%',
        borderWidth:1,
        alignItems:'center',
        padding:10,
        borderRadius:10,
        backgroundColor:COLORS.primary
    },
    buttonText:{
        fontSize:SIZES.font,
        color:COLORS.white,
    },
    buttonOutline:{
        marginRight:10,
        backgroundColor:COLORS.white,
    },
    buttonOutlineText:{
        color:COLORS.primary,
        fontSize:SIZES.font
    },
    logo:{
        marginBottom:20,
        width:73,
        height:90,
    }
})

export default LoginScreen;