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
 

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
 
const storage = firebase.storage();

export { storage, firebase as default };


 