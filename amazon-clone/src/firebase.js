import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhfQZENdBa8wbheZnRjjpJNNg7Ny6lWz0",
    authDomain: "challenge-c56d1.firebaseapp.com",
    projectId: "challenge-c56d1",
    storageBucket: "challenge-c56d1.appspot.com",
    messagingSenderId: "510026674686",
    appId: "1:510026674686:web:37522dbac680a1ebab10af",
    measurementId: "G-TT3R3J33FC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

