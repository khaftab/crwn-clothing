import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAwF14QFJdN9iufCvNyG_We3OQ0i5Xx8vc",
  authDomain: "crown-clothing-86bd9.firebaseapp.com",
  databaseURL: "https://crown-clothing-86bd9.firebaseio.com",
  projectId: "crown-clothing-86bd9",
  storageBucket: "crown-clothing-86bd9.appspot.com",
  messagingSenderId: "152138618694",
  appId: "1:152138618694:web:71ea8e1f86bb52d7857747",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
