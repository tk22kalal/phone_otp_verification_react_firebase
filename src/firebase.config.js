// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhPm8HdbFFkVg1v0tO_19T0VN05t478dE",
  authDomain: "otpver-cf02b.firebaseapp.com",
  projectId: "otpver-cf02b",
  storageBucket: "otpver-cf02b.appspot.com",
  messagingSenderId: "954864944960",
  appId: "1:954864944960:web:4e446c7602feb6cf091ca5",
  measurementId: "G-2F406GS80V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
