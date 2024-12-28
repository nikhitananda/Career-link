// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHLfPu-ciOLBryUXcl1cKlBlvmIy0tCKM',
  authDomain: 'se-co17-careerlink.firebaseapp.com',
  projectId: 'se-co17-careerlink',
  storageBucket: 'se-co17-careerlink.appspot.com',
  messagingSenderId: '792240000247',
  appId: '1:792240000247:web:67d37c1ace8b940ed2d7f2',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://se-co17-careerlink-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export const db = database;
