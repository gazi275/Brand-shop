import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqdeuVgYxCWF35hAJ-EmkfqW51_xzfYOI",
  authDomain: "food-and-beverage-8cdde.firebaseapp.com",
  projectId: "food-and-beverage-8cdde",
  storageBucket: "food-and-beverage-8cdde.appspot.com",
  messagingSenderId: "31751185106",
  appId: "1:31751185106:web:64432cfd156dca83cf830b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;