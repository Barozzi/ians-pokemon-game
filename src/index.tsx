import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

ReactDOM.render(<App />, document.getElementById("root"));

var firebaseConfig = {
  apiKey: "AIzaSyABtx_WhXZn5sPvz3sojsUTSubfPLZ7Mv4",
  authDomain: "ians-pokemon-game.firebaseapp.com",
  databaseURL: "https://ians-pokemon-game.firebaseio.com",
  projectId: "ians-pokemon-game",
  storageBucket: "ians-pokemon-game.appspot.com",
  messagingSenderId: "636055702141",
  appId: "1:636055702141:web:d22a10732233566ac13f14",
  measurementId: "G-KV3GHRQRL6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
