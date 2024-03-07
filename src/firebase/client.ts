// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBin66Ywx19VtUqD1j-LQGenHUy0vGIBOs",
  authDomain: "connectme-db262.firebaseapp.com",
  projectId: "connectme-db262",
  storageBucket: "connectme-db262.appspot.com",
  messagingSenderId: "871147554521",
  appId: "1:871147554521:web:6ba666dcd6740fa93be0c8",
  measurementId: "G-LJVC5Y5H12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
