import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
 
const firebaseConfig = {
    apiKey: "AIzaSyDmWccuvCDUpWhXljxnEG7AuvACiN1DOz8",
    authDomain: "ipd-smartkit.firebaseapp.com",
    projectId: "ipd-smartkit",
    storageBucket: "ipd-smartkit.appspot.com",
    messagingSenderId: "793710137391",
    appId: "1:793710137391:web:7aaff9353d0c075bfa36da",
    measurementId: "G-NV371BMQR4"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else  { 
    app = firebase.app()
}

const auth = firebase.auth();
const firestore = firebase.firestore(); // Include Firestore initialization

export {
    firebase,
    auth,
    firestore,
};