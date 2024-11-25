// firebase console project name  bank-loan


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD1pZDY24mzm-LbjTujTJjA0mbH7MBfWz0",
  authDomain: "bank-loan-42ee4.firebaseapp.com",
  projectId: "bank-loan-42ee4",
  storageBucket: "bank-loan-42ee4.firebasestorage.app",
  messagingSenderId: "547986583655",
  appId: "1:547986583655:web:99bef35dc29ed3adf624c2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);