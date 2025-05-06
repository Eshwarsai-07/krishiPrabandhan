// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDir5YWYQGn-wjnQKyBQ_HyCf-VxA4yYkI",
  authDomain: "krishiprabandhan.firebaseapp.com",
  projectId: "krishiprabandhan",
  storageBucket: "krishiprabandhan.firebasestorage.app",
  messagingSenderId: "643901622248",
  appId: "1:643901622248:web:eb26cca2880f4fe6e9865d",
  measurementId: "G-CY56N9T7H2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
