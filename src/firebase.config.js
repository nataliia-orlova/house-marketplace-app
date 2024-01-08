// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBBvZyTEbhU_xN_syPqdezKWYm39pvOt18',
    authDomain: 'house-marketplace-app-3b08b.firebaseapp.com',
    projectId: 'house-marketplace-app-3b08b',
    storageBucket: 'house-marketplace-app-3b08b.appspot.com',
    messagingSenderId: '533222667685',
    appId: '1:533222667685:web:ba7ca05602c186b137a44c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
