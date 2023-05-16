import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";



// var admin = require("firebase-admin");

// var serviceAccount = require("onlimofb.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://onlimo-3f748-default-rtdb.asia-southeast1.firebasedatabase.app"
// });

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

const app = initializeApp(firebaseConfig)
const db = getDatabase(app);
export {db}