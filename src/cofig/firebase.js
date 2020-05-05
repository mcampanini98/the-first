import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBHUNOSL1_LoUz_CLIlynBMof6yz4mdhw4",
    authDomain: "react-2907b.firebaseapp.com",
    databaseURL: "https://react-2907b.firebaseio.com",
    projectId: "react-2907b",
    storageBucket: "react-2907b.appspot.com",
    messagingSenderId: "2299860290",
    appId: "1:2299860290:web:a2e968eb76f1355b72a4db"
    };
   
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  
  export default firebase;