import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOuKMNR9uJr1hD2fofa9UEpbQJJ8pFL5o",
    authDomain: "ankit-project-management.firebaseapp.com",
    databaseURL: "https://ankit-project-management.firebaseio.com",
    projectId: "ankit-project-management",
    storageBucket: "ankit-project-management.appspot.com",
    messagingSenderId: "558227817532",
    appId: "1:558227817532:web:7754ca15629524e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;