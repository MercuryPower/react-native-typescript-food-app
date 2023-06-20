import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';
import Header from './src/components/Header';
import Categories from "./src/components/Categories";
import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown:false}}   name='Login' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


