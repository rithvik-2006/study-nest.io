// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz-pNVyDpbzPAO-v9UmPn5jlzjQi7RJCQ",
  authDomain: "study-nest-f5fdb.firebaseapp.com",
  projectId: "study-nest-f5fdb",
  storageBucket: "study-nest-f5fdb.firebasestorage.app",
  messagingSenderId: "576832588664",
  appId: "1:576832588664:web:a03103466952f0d156168d",
  measurementId: "G-Y1GP9CRCQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);