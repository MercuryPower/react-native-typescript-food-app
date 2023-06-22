import React, {useState} from 'react';
import {categories} from "../../data/categories";
import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {COLORS, SIZES} from "../../constants";

const CategoryItem = () => {
    const [active, setActive] = useState<number | null>(null)
    return (
        <View style={styles.content}>
            {categories.map((category, idx) =>(
                <View key={`categories ${idx}`} style={{backgroundColor:active === idx ? COLORS.primary : COLORS.white, borderRadius:10, marginTop:15,}}>
                    <TouchableOpacity onPress={() => setActive(idx)} style={styles.content} >
                        <View  style={{alignItems:'center', marginHorizontal:5,}}>
                            <Image source={{uri:category.image}} alt={category.title} style={{paddingHorizontal:5,width:160, height:160}} />
                            <Text style={{fontWeight:'bold', fontSize:SIZES.h2, paddingTop:5,color:active === idx ? COLORS.white : COLORS.black,}}>{category.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    content:{
        marginTop:10,
        padding:2,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
    }
})

export default CategoryItem;