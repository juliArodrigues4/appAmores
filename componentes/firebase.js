import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAoT3S081SOVwPKT0TMrYoA2W3eA_YlGtQ",
  authDomain: "diariobd-f7c42.firebaseapp.com",
  projectId: "diariobd-f7c42",
  storageBucket: "diariobd-f7c42.appspot.com",
  messagingSenderId: "543681686339",
  appId: "1:543681686339:web:447f201c3949e069309df6"
};

if (!Firebase.apps.lenght){

Firebase.initializeApp(firebaseConfig);

}

const bdstore = Firebase.firestore();

export default bdstore;