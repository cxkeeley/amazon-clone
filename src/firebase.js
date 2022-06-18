// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwo5yhKoi3IRTL1X_1c1RwFzL8itme20w',
  authDomain: 'clone-69212.firebaseapp.com',
  projectId: 'clone-69212',
  storageBucket: 'clone-69212.appspot.com',
  messagingSenderId: '804876906822',
  appId: '1:804876906822:web:d380fbfdcf03b5c40b7547',
  measurementId: 'G-6MN7F1GB63'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics, createUserWithEmailAndPassword };
