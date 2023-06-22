import {LatLng} from "react-native-maps";

interface City {
    title:string,
    coordinates: LatLng
}

export const cities: City[] = [
    {
        title: 'Louisville',
        coordinates: {
            latitude: 38.2527,
            longitude: -85.7585,
        },
    },
    {
        title: 'Lexington',
        coordinates: {
            latitude: 38.0406,
            longitude: -84.5037,
        },
    },
    {
        title: 'Bowling Green',
        coordinates: {
            latitude: 36.9685,
            longitude: -86.4808,
        },
    },
    {
        title: 'Owensboro',
        coordinates: {
            latitude: 37.7749,
            longitude: -87.1133,
        },
    },
    {
        title: 'Covington',
        coordinates: {
            latitude: 39.0837,
            longitude: -84.5086,
        },
    },
    {
        title: 'Hopkinsville',
        coordinates: {
            latitude: 36.8656,
            longitude: -87.4886,
        },
    },
    {
        title: 'Richmond',
        coordinates: {
            latitude: 37.7479,
            longitude: -84.2947,
        },
    },
    {
        title: 'Florence',
        coordinates: {
            latitude: 38.9989,
            longitude: -84.6266,
        },
    },
];