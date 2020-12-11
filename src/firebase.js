import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDtzi-emJn9gbHQlUUO2JrztxammNzfMUc",
    authDomain: "facebook-clone-92f05.firebaseapp.com",
    projectId: "facebook-clone-92f05",
    storageBucket: "facebook-clone-92f05.appspot.com",
    messagingSenderId: "125076522974",
    appId: "1:125076522974:web:9aae2c9fc011be7720bf4f",
    measurementId: "G-09M39937PD",
    databaseUrl: "https://facebook-clone-92f05-default-rtdb.firebaseio.com/"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
