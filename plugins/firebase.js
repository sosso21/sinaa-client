import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AAAAPf1gtp4:APA91bEnoAtR7i4QhAbHIqjinL3X41tE7-yTEdeJYjx80sm2ivhA-3MWCB9fOMmCf087AsCH-UKIt6pFpgaYKnY2TSvpeLVs9m4IIbwtv0HcLPIU1yy75yWcOzmMy2OGcGRg0WCXtZ2t",//
    authDomain: "cless-image.firebaseapp.com",
    projectId: "cless-image",
    storageBucket: "cless-image.appspot.com",
    messagingSenderId: "266243978910",//
    appId: "1:561212264407:web:ad0acfccc442ca3464c592",
    measurementId: "G-T3WGBD3W6M"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };