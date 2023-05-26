import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD8zAnoWqkx4ax1VxdvAK6ASgV0yl2AxDw",
  authDomain: "onlimo-3f748.firebaseapp.com",
  databaseURL: "https://onlimo-3f748-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onlimo-3f748",
  storageBucket: "onlimo-3f748.appspot.com",
  messagingSenderId: "484716788564",
  appId: "1:484716788564:web:e6a1cb369b49d6a29266c1",
  measurementId: "G-CNWD153WFG"
};
if (firebase.app.length === 0){
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Export the database instance
// export default firebase.firebase();
