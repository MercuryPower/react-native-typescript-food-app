import React, {useState} from 'react';
import MapView, {Marker} from "react-native-maps";
import {Dimensions, Image, Text, View} from "react-native";
import {cities} from "../../data/cities";
import {COLORS, SIZES} from "../../constants";

const Location = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.5,
        longitude: -85.0,
        latitudeDelta: 2.5,
        longitudeDelta: 2.5,
    })
    return (
        <View style={{justifyContent:'center', alignItems:'center',borderTopWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h1, marginTop:10}}>OUR</Text>
            <Text style={{fontWeight:'bold', fontSize:SIZES.h1, padding:2, marginBottom:20, color:COLORS.white, backgroundColor:COLORS.primary}}> BFC RESTAURANTS </Text>
            <MapView style={{width:'100%', height:500,justifyContent:'center', alignItems:'center', paddingHorizontal:10, marginBottom:50}} region={mapRegion}>
                {cities.map((city) => (
                    <Marker key={city.title} coordinate={city.coordinates} title={city.title + ' BFC Restaurant'}>
                        <View>
                            <Image style={{width:49, height:60}}  source={{uri: 'https://inciajandekgyar.hu/image/designers/9d90c9199c1e661f7970ad0779bb794b1619676155.png'}} />
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default Location;