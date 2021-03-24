/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const Config = {
  apiKey: "AIzaSyCRZNemA4dfk_Vy1orvVR9d0gZ11xue6zM",
  authDomain: "startupace-auth-system.firebaseapp.com",
  projectId: "startupace-auth-system",
  storageBucket: "startupace-auth-system.appspot.com",
  messagingSenderId: "849716672945",
  appId: "1:849716672945:web:b3c00ca321b274c843a590",
  measurementId: "G-NHL7JGYVGR",
};

if (!firebase.length) {
  firebase.initializeApp(Config);
}

// Initialize Firebase
export default firebase;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
