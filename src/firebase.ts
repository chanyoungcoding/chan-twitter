import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKbzUobAVoRnEWDfl7uUMhAkhW3bgxG64",
  authDomain: "chan-twitter.firebaseapp.com",
  projectId: "chan-twitter",
  storageBucket: "chan-twitter.appspot.com",
  messagingSenderId: "183111726302",
  appId: "1:183111726302:web:baf6cf067a6751aa42be4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);