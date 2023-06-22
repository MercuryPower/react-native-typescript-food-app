// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbdwaOR5lv9IYzauKp5eOjvQIJ1BKKs3k",
    authDomain: "fir-auth-42040.firebaseapp.com",
    projectId: "fir-auth-42040",
    storageBucket: "fir-auth-42040.appspot.com",
    messagingSenderId: "71326008812",
    appId: "1:71326008812:web:1f837cef65082d76926cc9"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
app = firebase.app();
const auth = firebase.auth();


export {auth};
