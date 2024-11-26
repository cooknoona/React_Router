import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMANfbQXZx6NUzeMkQV-qZYDem7AcdHEc",
  authDomain: "mini-project-a511c.firebaseapp.com",
  projectId: "mini-project-a511c",
  storageBucket: "mini-project-a511c.firebasestorage.app",
  messagingSenderId: "716215638151",
  appId: "1:716215638151:web:253bbcf8cb90ad2b6dc022"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();