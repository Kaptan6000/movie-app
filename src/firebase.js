import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMEcc-Rt3uRgyidm2-zaSM_F_64scuyfQ",
    authDomain: "movie-app-8b023.firebaseapp.com",
    projectId: "movie-app-8b023",
    storageBucket: "movie-app-8b023.appspot.com",
    messagingSenderId: "289364984303",
    appId: "1:289364984303:web:2081d61d69beb578f6361a"
  }; 

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;