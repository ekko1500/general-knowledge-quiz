import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2NDHd39I2KuRHfKwlJTrwZgjOxneUe-s",
  authDomain: "appointment-aa263.firebaseapp.com",
  projectId: "appointment-aa263",
  storageBucket: "appointment-aa263.appspot.com",
  messagingSenderId: "34752021300",
  appId: "1:34752021300:web:08e6fef8fa746dacf9db61",
  measurementId: "G-HTLSMX9S6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
