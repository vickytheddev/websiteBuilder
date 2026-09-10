import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-9c1c6.firebaseapp.com",
  projectId: "genwebai-9c1c6",
  storageBucket: "genwebai-9c1c6.firebasestorage.app",
  messagingSenderId: "516670221148",
  appId: "1:516670221148:web:309d439125b97647402f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}