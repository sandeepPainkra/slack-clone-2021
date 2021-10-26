import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMIWWf6dCYcTl_Y_tJbjSUZANGAMZt7aM",
  authDomain: "slack-clonepractice2021.firebaseapp.com",
  projectId: "slack-clonepractice2021",
  storageBucket: "slack-clonepractice2021.appspot.com",
  messagingSenderId: "1043252942889",
  appId: "1:1043252942889:web:1cab5646d0c3c9dd9a2438",
  measurementId: "G-B5JM0PFR5P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
