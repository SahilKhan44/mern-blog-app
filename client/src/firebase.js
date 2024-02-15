// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-blog-13fc0.firebaseapp.com",
  projectId: "mern-blog-13fc0",
  storageBucket: "mern-blog-13fc0.appspot.com",
  messagingSenderId: "188443394625",
  appId: "1:188443394625:web:91d507cb7268e87735fcc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);