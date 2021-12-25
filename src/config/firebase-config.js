import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAb_A5V21aAim57FxKUPWv-htct-jPqPu8",
  authDomain: "react-lupin.firebaseapp.com",
  projectId: "react-lupin",
  storageBucket: "react-lupin.appspot.com",
  messagingSenderId: "391484465533",
  appId: "1:391484465533:web:46fa5a37bec9d9868dac14",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;