// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Auth
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firestore
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDul8_ddVczSzLlKEy9TKl7UE0oPgtGWMg",
  authDomain: "strawhats-9a0e3.firebaseapp.com",
  projectId: "strawhats-9a0e3",
  storageBucket: "strawhats-9a0e3.appspot.com",
  messagingSenderId: "446120936732",
  appId: "1:446120936732:web:d1dff261e9fa76760ae6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;

// Initialize Auth User
// export const authenticate = getAuth(app);;

// Initialize Firestore
export const db = getFirestore(app);;