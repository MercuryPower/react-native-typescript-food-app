import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from "react-native";
import {SIZES} from "../../constants";
import {popular, PopularProps} from "../../data/popular";


const Popular = () => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', margin:25, paddingTop:15, borderTopWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h2}}>POPULAR</Text>
                <View style={{width:'100%', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                    {popular.map((pop:PopularProps) => (
                        <TouchableHighlight key={pop.id} style={styles.content} >
                            <View  style={{alignItems:'center', marginHorizontal:5,}}>
                                <Image source={{uri:pop.image}} alt={pop.title} style={{paddingHorizontal:5,width:160, height:160}} />
                                <Text style={{fontWeight:'bold', fontSize:SIZES.h3, paddingTop:5,}}>{pop.title}</Text>
                                <Text style={{fontWeight:'bold', fontSize:SIZES.h2, paddingTop:5,}}>{pop.price + '$'} </Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>
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
    }
})
export default Popular;