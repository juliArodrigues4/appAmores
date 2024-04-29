// Import the functions you need from the SDKs you need
import Firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbkmB_JrQ5VL2BongVNA9NbiYObD7wt3k",
  authDomain: "agendamentodenamoradas.firebaseapp.com",
  projectId: "agendamentodenamoradas",
  storageBucket: "agendamentodenamoradas.appspot.com",
  messagingSenderId: "1030417836856",
  appId: "1:1030417836856:web:73fe2d1e8354a410d02fcd"
};

if (!Firebase.apps.lenght){

  Firebase.initializeApp(firebaseConfig);
  
  }
  
  const bdstore = Firebase.firestore();
  
  export default bdstore;