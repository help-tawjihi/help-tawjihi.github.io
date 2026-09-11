import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


/* =====================================================
   ضع معلومات Firebase الخاصة بك هنا
   ===================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyCAUAvNwc0Qe-ua-2hqqFp1QmEoKk5AkUI",
  authDomain: "help-tawjihi.firebaseapp.com",
  projectId: "help-tawjihi",
  storageBucket: "help-tawjihi.firebasestorage.app",
  messagingSenderId: "734764917523",
  appId: "1:734764917523:web:aad1235e1945f26872b0e6"
};


/* =====================================================
   Firebase
   ===================================================== */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


/* =====================================================
   Export
   ===================================================== */

export {
  app,
  auth,
  db,

  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
};
