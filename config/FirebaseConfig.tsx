// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuG7aKEbb9RTVatdhs09qDmFKHuj37K04",
  authDomain: "authentication-d0141.firebaseapp.com",
  projectId: "authentication-d0141",
  storageBucket: "authentication-d0141.firebasestorage.app",
  messagingSenderId: "931604810099",
  appId: "1:931604810099:web:f99698e9df53c6e9ac1d06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
