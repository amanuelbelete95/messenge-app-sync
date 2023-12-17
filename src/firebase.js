import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIDBkOhKQkI1THBabi6HQ7ii-bry7oEYs',
  authDomain: 'amanuelfbp.firebaseapp.com',
  projectId: 'amanuelfbp',
  storageBucket: 'amanuelfbp.appspot.com',
  messagingSenderId: '742869326842',
  appId: '1:742869326842:web:3816f28ff60e4275f72243',
};

// Initialize Firebase project;
const app = initializeApp(firebaseConfig);
//get authentication for the firebase project;
const auth = getAuth(app);
//get firestore for the firebase project;
const db = getFirestore(app);
export { auth, db };
