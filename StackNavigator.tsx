import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';
import Header from './src/components/Header';
import Categories from "./src/components/Categories";
import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import UserScreen from "./src/screens/PersonalScreen";


export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Personal: undefined;
}

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen} />
                <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen} />
                <Stack.Screen  name='Personal' component={UserScreen} />
            </Stack.Navigator>
    );
}


