import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkXqYBVESKSf5QC6mssYf2BI4klUFRgbA",
  authDomain: "authentication-ea7f6.firebaseapp.com",
  projectId: "authentication-ea7f6",
  storageBucket: "authentication-ea7f6.appspot.com",
  messagingSenderId: "748596539126",
  appId: "1:748596539126:web:d7a2928824cc82bf1c46d7",
  measurementId: "G-XX5XYYT22K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);