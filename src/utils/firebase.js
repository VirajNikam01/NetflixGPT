// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRk9q3cibPN73Pcp4KxO6asZXjPDBtw-A",
  authDomain: "netflixgpt-91652.firebaseapp.com",
  projectId: "netflixgpt-91652",
  storageBucket: "netflixgpt-91652.appspot.com",
  messagingSenderId: "1069440653306",
  appId: "1:1069440653306:web:3f44c82c3ecf613f63b643",
  measurementId: "G-V13EXPE48J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
