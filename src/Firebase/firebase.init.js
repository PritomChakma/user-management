// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6fJhM62COs_pdzuweUqwMKAgzqI1GHM",
  authDomain: "user-management-7416d.firebaseapp.com",
  projectId: "user-management-7416d",
  storageBucket: "user-management-7416d.firebasestorage.app",
  messagingSenderId: "802153376488",
  appId: "1:802153376488:web:c98ad3ec505601f9d0375d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
