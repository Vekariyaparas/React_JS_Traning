import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLrTM7NW3XiwGo_i07s0J5t-wWehgwh9c",
  authDomain: "bloggung-app.firebaseapp.com",
  projectId: "bloggung-app",
  storageBucket: "bloggung-app.appspot.com",
  messagingSenderId: "858762328070",
  appId: "1:858762328070:web:ddf84daa92f2b692602b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();