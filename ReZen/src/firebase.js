// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUwLOrLfEzKBM589f99lnjxMZ75dYyirI",
    authDomain: "rezen-6fb92.firebaseapp.com",
    projectId: "rezen-6fb92",
    storageBucket: "rezen-6fb92.firebasestorage.app",
    messagingSenderId: "967749037881",
    appId: "1:967749037881:web:5bb4ee0cc72648bfcb42e8",
    measurementId: "G-F98QHNMGCL"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication & Firestore
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;