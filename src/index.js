import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


firebase.initializeApp({
  apiKey: "AIzaSyAKmAT-LmBNkHx36pzAlipWDzzEID7aifc",
  authDomain: "chat-auth-e7046.firebaseapp.com",
  projectId: "chat-auth-e7046",
  storageBucket: "chat-auth-e7046.appspot.com",
  messagingSenderId: "638756670186",
  appId: "1:638756670186:web:1d1ca29edafcc77170e593",
  measurementId: "G-8XNLW86TKN"
})


const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{firebase, auth, firestore}}>
    <App />
    </Context.Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
