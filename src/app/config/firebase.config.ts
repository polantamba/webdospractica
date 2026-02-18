// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBha1plQ5ae9GRIogZWxLJQfJETUvk_0u8",
    authDomain: "polprojectsapp3.firebaseapp.com",
    databaseURL: "https://polprojectsapp3-default-rtdb.firebaseio.com",
    projectId: "polprojectsapp3",
    storageBucket: "polprojectsapp3.firebasestorage.app",
    messagingSenderId: "903484949468",
    appId: "1:903484949468:web:0cea16bc53757c4bc10519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);