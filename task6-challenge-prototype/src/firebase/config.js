import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// 
const firebaseConfig = {
  apiKey: "AIzaSyDvySSpxk_EHM_PJSFEQiz-ePoxyq3JLuY",
  authDomain: "audio-challenge-webapp.firebaseapp.com",
  databaseURL: "https://audio-challenge-webapp.firebaseio.com",
  projectId: "audio-challenge-webapp",
  storageBucket: "audio-challenge-webapp.appspot.com",
  messagingSenderId: "854383862414",
  appId: "1:854383862414:web:c245ce2b7457a77cde9fdf"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };