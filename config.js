import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDoBCqHB5AnP6U9kqVifbMFkvYlpAPObsw",
    authDomain: "e-ride-e1949.firebaseapp.com",
    projectId: "e-ride-e1949",
    storageBucket: "e-ride-e1949.appspot.com",
    messagingSenderId: "543505146840",
    appId: "1:543505146840:web:8e90b16ffba8baf309c8ad"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
