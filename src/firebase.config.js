import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvakOfEJ9RnC4KPJO7RJIoYGRzzki9pXM",
  authDomain: "house-marketplace-app-4d4c9.firebaseapp.com",
  projectId: "house-marketplace-app-4d4c9",
  storageBucket: "house-marketplace-app-4d4c9.appspot.com",
  messagingSenderId: "970658849048",
  appId: "1:970658849048:web:7a83c60a6a2ab076ccfe6d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();



