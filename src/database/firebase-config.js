// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPIXmf2K1PZYDZDthnlZ2YT2uxqZdgq1I",
  authDomain: "aster-caster.firebaseapp.com",
  projectId: "aster-caster",
  storageBucket: "aster-caster.appspot.com",
  messagingSenderId: "331686873018",
  appId: "1:331686873018:web:74ba4c55e0c7aa6aa27f83",
  measurementId: "G-5HLWFK54VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);