import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxGob30pVWgXmooLuGQ6r4NbeXXfBMHe0",
    authDomain: "goalcoach-adda2.firebaseapp.com",
    databaseURL: "https://goalcoach-adda2.firebaseio.com",
    projectId: "goalcoach-adda2",
    storageBucket: "",
    messagingSenderId: "920318726343"
};

export const firebaseApp = firebase.initializeApp(config);