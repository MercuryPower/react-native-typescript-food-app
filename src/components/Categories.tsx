import React, {useState} from 'react';
import {Animated, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {categories} from "../../data/categories";
import CategoryItem from "./CategoryItem";

const Categories = () => {

    return (
        <View style={{justifyContent:'center', alignItems:'center', margin:25, paddingTop:15, borderTopWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h1}}>CATEGORIES</Text>
            <CategoryItem />
        </View>
    );
};


export default Categories;