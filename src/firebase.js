import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUN394xxV27xlkLWJsmCYUjsTNhycuCBY",
    authDomain: "zomentum-chat.firebaseapp.com",
    databaseURL: "https://zomentum-chat.firebaseio.com",
    projectId: "zomentum-chat",
    storageBucket: "zomentum-chat.appspot.com",
    messagingSenderId: "829660876038",
    appId: "1:829660876038:web:5554b85439d44982de6287"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;