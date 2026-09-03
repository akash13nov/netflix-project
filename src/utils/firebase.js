// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm1yXqTqddedgVEKBese_fkDMuNKQWqC4",
  authDomain: "netflix-project-48437.firebaseapp.com",
  projectId: "netflix-project-48437",
  storageBucket: "netflix-project-48437.firebasestorage.app",
  messagingSenderId: "580876180279",
  appId: "1:580876180279:web:f7ce7384aa0e2d977418b2",
  measurementId: "G-KS559V9Q3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
