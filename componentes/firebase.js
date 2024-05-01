import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
           
const firebaseConfig = {
  apiKey: "AIzaSyCbkmB_JrQ5VL2BongVNA9NbiYObD7wt3k",
  authDomain: "agendamentodenamoradas.firebaseapp.com",
  projectId: "agendamentodenamoradas",
  storageBucket: "agendamentodenamoradas.appspot.com",
  messagingSenderId: "1030417836856",
  appId: "1:1030417836856:web:73fe2d1e8354a410d02fcd"
};
  
  const app = initializeApp(firebaseConfig);
  export const firestore  = getFirestore(app);