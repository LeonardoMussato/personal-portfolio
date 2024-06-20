import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserLocalPersistence,
} from "firebase/auth";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyByj87sQqfx3KQ7-9rAY9njU52oRIaXSb4",
    authDomain: "personal-portfolio-8439d.firebaseapp.com",
    projectId: "personal-portfolio-8439d",
    storageBucket: "personal-portfolio-8439d.appspot.com",
    messagingSenderId: "399604720433",
    appId: "1:399604720433:web:50e764b565ddc8813c0610",
  };
  const app = initializeApp(firebaseConfig);
  return app;
};

export const useFirebaseAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = "it";
  auth.setPersistence(browserLocalPersistence);
  const signIn = () => signInWithPopup(auth, provider);
  const signOutFromSession = () => auth.signOut();
  return { signIn, signOutFromSession, auth };
};
