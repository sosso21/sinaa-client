import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
   
    apiKey: "AIzaSyArKdZmADDJYUtE2uCOGa1oYaldLjbCpbs",
    authDomain: "sinaa-fr.firebaseapp.com",
    projectId: "sinaa-fr",
    storageBucket: "sinaa-fr.appspot.com",
    messagingSenderId: "268616796903",
    appId: "1:268616796903:web:a2bc4ddf2a3320361a3042",
    measurementId: "G-CXBM5GQJFM"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };



/* 

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}

*/