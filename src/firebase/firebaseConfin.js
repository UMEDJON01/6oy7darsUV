import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCNACinrXYx4EtrFAM9PL_g5SGNx7XhLM",
  authDomain: "todo-231.firebaseapp.com",
  projectId: "todo-231",
  storageBucket: "todo-231.appspot.com",
  messagingSenderId: "701226598870",
  appId: "1:701226598870:web:da074f93fb586397c66477",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
