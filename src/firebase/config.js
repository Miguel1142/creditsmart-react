// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHebRBYAZXORmVT-mMShT_65nSsu3HSK0",
    authDomain: "creditsmart-ms.firebaseapp.com",
    projectId: "creditsmart-ms",
    storageBucket: "creditsmart-ms.firebasestorage.app",
    messagingSenderId: "8124769534",
    appId: "1:8124769534:web:d2b78aa4a04f55d372f1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);