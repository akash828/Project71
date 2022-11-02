import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDDlpVIfKX8GyKInoAU6Kavox724WWafIo",
    authDomain: "project-c71-9f437.firebaseapp.com",
    projectId: "project-c71-9f437",
    storageBucket: "project-c71-9f437.appspot.com",
    messagingSenderId: "270111050967",
    appId: "1:270111050967:web:2967815c1b197dfadb7492"
  };


firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();
