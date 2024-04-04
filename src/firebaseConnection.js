import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD8BVIgvefdkFn3g7fVBc7oQqxYA7sUY-o",
  authDomain: "fire-list-bbeed.firebaseapp.com",
  projectId: "fire-list-bbeed",
  storageBucket: "fire-list-bbeed.appspot.com",
  messagingSenderId: "1095089754989",
  appId: "1:1095089754989:web:8850f033db0164aec00064",
  measurementId: "G-JPN0VXM1Q5"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };