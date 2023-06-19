import React from 'react';
import {Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants";

const Categories = () => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', margin:25, paddingTop:15, borderTopWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h2}}>CATEGORIES</Text>
        </View>
    );
};

export default Categories;