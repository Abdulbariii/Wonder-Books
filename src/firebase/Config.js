import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA6W0gVnDQohVFf05_mNHLSprOTuvu0ss",
  authDomain: "wonder-books-e1609.firebaseapp.com",
  projectId: "wonder-books-e1609",
  storageBucket: "wonder-books-e1609.appspot.com",
  messagingSenderId: "328555958746",
  appId: "1:328555958746:web:6879d7c9a49df5811470e3",
  measurementId: "G-SS96J4K48T",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth };
