import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBJztGvrRCJShjgGhr_QK6zAOIkdarj5w8",
  authDomain: "clon-119c2.firebaseapp.com",
  projectId: "clon-119c2",
  storageBucket: "clon-119c2.appspot.com",
  messagingSenderId: "956099374932",
  appId: "1:956099374932:web:343542fff316d002b7a2c1",
  measurementId: "G-3C1DYBRJQJ"

});
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};