import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjEVhK4htUhkC64qpPOIb6EFNYAlN8PA",
  authDomain: "tiktok-clone-341ac.firebaseapp.com",
  projectId: "tiktok-clone-341ac",
  storageBucket: "tiktok-clone-341ac.appspot.com",
  messagingSenderId: "526408741250",
  appId: "1:526408741250:web:ca7cf22afd89c13cdd9f9b",
  measurementId: "G-9D0PD927HY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
