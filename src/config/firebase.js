/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA7DfkgK_73sVd_ROZp0QmV5V8vFrfREo",
  authDomain: "expense-tracker-b914a.firebaseapp.com",
  projectId: "expense-tracker-b914a",
  storageBucket: "expense-tracker-b914a.appspot.com",
  messagingSenderId: "1088157912410",
  appId: "1:1088157912410:web:519c7551dbbd4962de7763",
  measurementId: "G-2Y82KB52K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db }