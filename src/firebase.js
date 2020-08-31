import firebase from "firebase";



  const firebaseConfig = {
    apiKey: "AIzaSyCvfpenyHTvHTXZxpE-3cv3rjBT7pBP2p4",
    authDomain: "zomentum-chat-fd40e.firebaseapp.com",
    databaseURL: "https://zomentum-chat-fd40e.firebaseio.com",
    projectId: "zomentum-chat-fd40e",
    storageBucket: "zomentum-chat-fd40e.appspot.com",
    messagingSenderId: "947209398480",
    appId: "1:947209398480:web:d31e049baf5d0245ea16d5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;
