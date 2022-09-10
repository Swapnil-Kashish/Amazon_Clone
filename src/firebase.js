// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0q0Oq2vLF61XBwH7jFoKkTWjZPpinAx0",
  authDomain: "clone-b4ac4.firebaseapp.com",
  projectId: "clone-b4ac4",
  storageBucket: "clone-b4ac4.appspot.com",
  messagingSenderId: "339190896408",
  appId: "1:339190896408:web:7c362e7348042d259b306d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
