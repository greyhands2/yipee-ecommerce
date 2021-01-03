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

  export const getCurrentUser = () => {
      return new Promise((resolve, reject)=>{
          const unsubscribe = auth.onAuthStateChanged(userAuth=>{
              unsubscribe();
              resolve(userAuth);
          }, reject);
      });
  }


  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();


  googleProvider.setCustomParameters({prompt: 'select_account'});

//   export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();
  
    if (snapShot.empty) {
      const cartDocRef = firestore.collection('carts').doc();
      await cartDocRef.set({ userId, cartItems: [] });
      return cartDocRef;
    } else {
      return snapShot.docs[0].ref;
    }
  };

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



export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
   
    const batch = firestore.batch();
    objectsToAdd.forEach((obj)=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

   return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) =>{
    const transformedsCollection = collections.docs.map(doc=>{
        const {title, items} = doc.data();

        return {
            routName:encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });


    return transformedsCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

  export default firebase;
