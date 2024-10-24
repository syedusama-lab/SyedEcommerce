import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIRBASE_API_KEY,
  authDomain: "practice-13821.firebaseapp.com",
  projectId: "practice-13821",
  storageBucket: "practice-13821.appspot.com",
  messagingSenderId: "466025985811",
  appId: "1:466025985811:web:a60778b8eddd74aada8ce6",
  measurementId: "G-V56PBPCZRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)