// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfM8d1Rhh0EU7YKG-pYUSLCHegHxmsdh8",
  authDomain: "netflix-gpt-a5d3a.firebaseapp.com",
  projectId: "netflix-gpt-a5d3a",
  storageBucket: "netflix-gpt-a5d3a.firebasestorage.app",
  messagingSenderId: "759724289508",
  appId: "1:759724289508:web:a9563314cfdf6a979d6bf1",
  measurementId: "G-SYN4Y0GGPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();