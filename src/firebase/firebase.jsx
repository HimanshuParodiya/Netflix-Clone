import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA-dUhMUX54-RPCs4llV5F8xQMNXRGHkes",
    authDomain: "netflix-clone-d982c.firebaseapp.com",
    projectId: "netflix-clone-d982c",
    storageBucket: "netflix-clone-d982c.appspot.com",
    messagingSenderId: "443548679126",
    appId: "1:443548679126:web:c54aac5514309bf2bcc277"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth();

  export {auth, createUserWithEmailAndPassword}
  
  
  export default db;