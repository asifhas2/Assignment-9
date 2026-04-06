// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIbApJZRmQ7YxB2TldCDYxdoIFYCtNCSk",
  authDomain: "toy-store-bb772.firebaseapp.com",
  projectId: "toy-store-bb772",
  storageBucket: "toy-store-bb772.firebasestorage.app",
  messagingSenderId: "1008035773177",
  appId: "1:1008035773177:web:e10306815455b9c8ad0028"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;