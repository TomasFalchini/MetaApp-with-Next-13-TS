import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsLYH-ZSxrI__Xjj97ds3gUvgtAl86kSI",
  authDomain: "meta-2cdf6.firebaseapp.com",
  projectId: "meta-2cdf6",
  storageBucket: "meta-2cdf6.appspot.com",
  messagingSenderId: "932277075954",
  appId: "1:932277075954:web:a2c5c3d3f34afbfe81f56b",
  measurementId: "G-D69R868NEC",
};

// Initialize Firebase and authentication
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
