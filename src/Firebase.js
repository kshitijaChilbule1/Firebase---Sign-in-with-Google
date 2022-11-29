
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBR9Vs-sd1QY-oTounk4b40rTNevgd9RF0",
  authDomain: "resto-f9ec7.firebaseapp.com",
  projectId: "resto-f9ec7",
  storageBucket: "resto-f9ec7.appspot.com",
  messagingSenderId: "711898410523",
  appId: "1:711898410523:web:7ff6a3bf19728ad61e52be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
};