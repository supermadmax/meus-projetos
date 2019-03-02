import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcjWUqb5I3Mxs3vg184hbKSy625iJMVA0",
    authDomain: "devzap-bc57e.firebaseapp.com",
    databaseURL: "https://devzap-bc57e.firebaseio.com",
    projectId: "devzap-bc57e",
    storageBucket: "devzap-bc57e.appspot.com",
    messagingSenderId: "518258588924"
};
firebase.initializeApp(config);

export default firebase

