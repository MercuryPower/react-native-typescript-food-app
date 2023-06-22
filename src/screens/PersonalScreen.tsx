import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../StackNavigator";
import {styles} from "./LoginScreen";
import {useNavigation} from "@react-navigation/native";

type PersonalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Personal'>;
const PersonalScreen = () => {
    const navigation = useNavigation<PersonalScreenNavigationProp>();
    return (
        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {}} style={[styles.button, {flex:1, justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={styles.buttonText}>Change password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PersonalScreen;