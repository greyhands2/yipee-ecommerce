import {takeLatest, put, all, call} from 'redux-saga/effects';


import userActionTypes from './user.types';

import {signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess} from './user.actions';


import { loaderRemove, loaderMiniRemove } from '../globals/global.actions';

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';




export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        
        const userSnapshot = yield userRef.get();
        //remember put() in saga replaces dispatch() in thunk
        yield all([put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })), put(loaderRemove(false))]);
    } catch(e){
        yield all([put(signInFailure(e)), put(loaderRemove(false))]);
    }    
    
}


export function* signInWithGoogle(){
    try {
       const {user} = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user);
    } catch(e){
        yield all([put(signInFailure(e)), put(loaderRemove(false))])
    }
}

export function* signInWithEmail({payload: {email, password}}){

    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotFromUserAuth(user);
    }   catch (e) {
        yield all([put(signInFailure(e)), put(loaderRemove(false))]);
    }

}

export function* signUpWithEmail({payload:{displayName, email, password}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield all([put(signUpSuccess({ user, additionalData: { displayName } })), put(loaderRemove(false))]);
        
        

    }catch(e){
        yield all([put(signUpFailure(e)), put(loaderRemove(false))])
    }
}


export function* signInAfterSignUp({payload:{user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield all([put(signOutSuccess()), put(loaderRemove(false))]);
    }catch(e){
        yield all([put(signOutFailure(e)), put(loaderRemove(false))]);
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(e){
        yield all([put(signInFailure(e)), put(loaderRemove(false))])
    }
}






export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSessions(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}



export function* onUserSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithEmail)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSessions), call(onUserSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
}


