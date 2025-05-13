import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApps } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
  apiKey: "AIzaSyBl0ovNHGsA83h32a85Z_pGnvmnZFIwz_I",
  authDomain: "controle-de-gastos-16afd.firebaseapp.com",
  projectId: "controle-de-gastos-16afd",
  storageBucket: "controle-de-gastos-16afd.firebasestorage.app",
  messagingSenderId: "889474821600",
  appId: "1:889474821600:web:7c323a932e98edd97ecf85"
};

// evita erro de duplicação de app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    updateDoc
};
