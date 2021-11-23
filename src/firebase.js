import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJ5jW3oky9ZECHnthIU7PuWh3ocLSnZCQ",
  authDomain: "ez-cart-reactapp.firebaseapp.com",
  projectId: "ez-cart-reactapp",
  storageBucket: "ez-cart-reactapp.appspot.com",
  messagingSenderId: "972632164191",
  appId: "1:972632164191:web:aebca6b3e64b8a553e18ea",
  measurementId: "G-YV7J64M5ZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };