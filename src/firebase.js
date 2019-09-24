import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDfekojaU5-6dtCbKTRKewqo7N7G7Jwco4",
    authDomain: "todoist-clone-5008e.firebaseapp.com",
    databaseURL: "https://todoist-clone-5008e.firebaseio.com",
    projectId: "todoist-clone-5008e",
    storageBucket: "todoist-clone-5008e.appspot.com",
    messagingSenderId: "887074625150",
    appId: "1:887074625150:web:53a8b0340f99a956536a2f"
});

export { firebaseConfig as firebase};