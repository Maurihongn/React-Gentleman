import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA89EiXh2yG1omyAmwa9LTqM8vHu9WuQW0",
  authDomain: "linkedinclone-292ef.firebaseapp.com",
  projectId: "linkedinclone-292ef",
  storageBucket: "linkedinclone-292ef.appspot.com",
  messagingSenderId: "658677374873",
  appId: "1:658677374873:web:8e004d039763290e787d08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
