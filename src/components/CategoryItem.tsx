import React from 'react';
import {categories} from "../../data/categories";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {SIZES} from "../../constants";

const CategoryItem = () => {
    return (
        <View style={styles.content}>
            {categories.map(category =>(
                <TouchableHighlight key={category.id} style={styles.content} >
                    <View  style={{alignItems:'center', marginHorizontal:5,}}>
                        <Image source={{uri:category.image}} alt={category.title} style={{paddingHorizontal:5,width:160, height:160}} />
                        <Text style={{fontWeight:'bold', fontSize:SIZES.h2, paddingTop:5,}}>{category.title}</Text>
                    </View>
                </TouchableHighlight>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    content:{
        marginTop:10,
        paddingHorizontal:2,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
    }
})

export default CategoryItem;