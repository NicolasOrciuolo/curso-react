import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZMD1ORztj-DbXFAeJlYgkPVFY1D0Ku3M",
  authDomain: "coder-orciuolo.firebaseapp.com",
  projectId: "coder-orciuolo",
  storageBucket: "coder-orciuolo.appspot.com",
  messagingSenderId: "698258959646",
  appId: "1:698258959646:web:bbb7e72b7032fc5dbcad0f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
