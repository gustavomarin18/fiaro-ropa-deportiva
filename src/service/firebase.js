// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-oWMYeJ0LKipQ8_9xG1DxMQtJLdtA48",
  authDomain: "ecommerce-coder-9edde.firebaseapp.com",
  projectId: "ecommerce-coder-9edde",
  storageBucket: "ecommerce-coder-9edde.appspot.com",
  messagingSenderId: "816755338309",
  appId: "1:816755338309:web:f881e5770372e8102ec72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db