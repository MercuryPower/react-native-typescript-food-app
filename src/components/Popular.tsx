import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {popular, PopularProps} from "../../data/popular";


const Popular = () => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', margin:25, paddingTop:15, borderTopWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h1}}>POPULAR</Text>
                <View style={{width:'100%', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                    {popular.map((pop:PopularProps, idx) => (
                        <View key={`popular ${idx}`} style={{borderRadius:10,}}>
                            <TouchableOpacity  style={styles.content} >
                                <View  style={{alignItems:'center', marginTop:15}}>
                                    <Image source={{uri:pop.image}} alt={pop.title} style={{paddingHorizontal:5,width:160, height:160}} />
                                        <Text style={{fontWeight:'bold', fontSize:SIZES.h3, paddingTop:5,}}>{pop.title}</Text>
                                        <Text style={{fontWeight:'bold', fontSize:SIZES.h2, marginTop:5, padding:5, borderRadius:10, borderWidth:1, borderColor:COLORS.primary}}> {pop.price + ' $'} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    content:{
        marginTop:10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    }
})
export default Popular;