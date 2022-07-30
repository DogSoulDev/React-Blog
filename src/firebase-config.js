import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjou2Ev20kKZVN_r5KFxQmmIUQ0QBc-U",
  authDomain: "blogproject-a81a7.firebaseapp.com",
  projectId: "blogproject-a81a7",
  storageBucket: "blogproject-a81a7.appspot.com",
  messagingSenderId: "799177818906",
  appId: "1:799177818906:web:a146f576055ab2a9ece2a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();