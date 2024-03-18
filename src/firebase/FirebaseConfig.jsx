// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6TDzzAeJjr0wUtoR_5tBllafApfuVWY",
  authDomain: "myecomproj-767ee.firebaseapp.com",
  projectId: "myecomproj-767ee",
  storageBucket: "myecomproj-767ee.appspot.com",
  messagingSenderId: "1011277008667",
  appId: "1:1011277008667:web:f46e2e9b93f6d7adfb0dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB, auth} ;