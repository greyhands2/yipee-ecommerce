import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZQ2cN1AvNBI35q68ZtDEPakUjDG8plHY",
    authDomain: "yipee-bcb82.firebaseapp.com",
    databaseURL: "https://yipee-bcb82.firebaseio.com",
    projectId: "yipee-bcb82",
    storageBucket: "yipee-bcb82.appspot.com",
    messagingSenderId: "724308184628",
    appId: "1:724308184628:web:ef85e97eb2a9e7a8680461",
    measurementId: "G-7XFE8ZR913"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();


  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(er){
            console.log('error creating user', er);
        }
    }
    return userRef;
  }


  export default firebase;
