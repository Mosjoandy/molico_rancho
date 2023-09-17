// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2hveh8hngXEIvlBPJr0zMpQYCK5OJclo",
  authDomain: "molicorancho.firebaseapp.com",
  projectId: "molicorancho",
  storageBucket: "molicorancho.appspot.com",
  messagingSenderId: "813532424463",
  appId: "1:813532424463:web:1ad13c2436a89edfb6f67a",
  measurementId: "G-4DST82TGFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);