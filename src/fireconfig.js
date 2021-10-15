import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzooMi1zSPBGppMpOSrWPgoJ7XiWECN4U",
  authDomain: "mex-cal.firebaseapp.com",
  projectId: "mex-cal",
  storageBucket: "mex-cal.appspot.com",
  messagingSenderId: "358206362383",
  appId: "1:358206362383:web:c53ac08062a8d2f64fe47a",
  measurementId: "G-DBSQDCMTPL",
};

//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const dbName = "Users";
const collectionUsed = collection(db, dbName);

export { auth, db, dbName, collectionUsed };
