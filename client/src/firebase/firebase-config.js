import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    //tuinformación de tu app en firebase
    apiKey: "AIzaSyBiiYx3QzRw0htwqgQT7Y_KdApRFoViYGQ",
    authDomain: "react-app-d4b09.firebaseapp.com",
    projectId: "react-app-d4b09",
    storageBucket: "react-app-d4b09.appspot.com",
    messagingSenderId: "103116009879",
    appId: "1:103116009879:web:7a169faa302ab78f37d4d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}