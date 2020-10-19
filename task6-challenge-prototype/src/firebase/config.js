import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDvySSpxk_EHM_PJSFEQiz-ePoxyq3JLuY",
  authDomain: "audio-challenge-webapp.firebaseapp.com",
  databaseURL: "https://audio-challenge-webapp.firebaseio.com",
  projectId: "audio-challenge-webapp",
  storageBucket: "audio-challenge-webapp.appspot.com",
  messagingSenderId: "854383862414",
  appId: "1:854383862414:web:c245ce2b7457a77cde9fdf"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };