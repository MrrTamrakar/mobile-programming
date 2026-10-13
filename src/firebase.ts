// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzhwAn7RPESEdVlpiVrFo8j01SsIveZ6Q",
  authDomain: "mobile-prg.firebaseapp.com",
  databaseURL: "https://mobile-prg-default-rtdb.firebaseio.com",
  projectId: "mobile-prg",
  storageBucket: "mobile-prg.firebasestorage.app",
  messagingSenderId: "387273019977",
  appId: "1:387273019977:web:7b0a23a528ba3a96dca598",
  measurementId: "G-G14DCF67ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);