// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVMKHPS6qEzQn7QzKtqgTu2Gic7a_r0Bo",
  authDomain: "artistry-avenue.firebaseapp.com",
  projectId: "artistry-avenue",
  storageBucket: "artistry-avenue.appspot.com",
  messagingSenderId: "687087340435",
  appId: "1:687087340435:web:bdc82777d43d0ffee1b666",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
