import {takeLatest, call, put, all} from 'redux-saga/effects';

import {ShopActionTypes} from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';
//note here generator function

export function* fetchCollectionsAsync(){
    //firebase listener method*observer pattern
        // this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot => {
        //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        // updateTheCollections(collectionsMap);
        // this.setState({loading: false});
        // });
    
        //getting data from firebase using promise
        //   collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            
        //   dispatch(fetchCollectionsSuccess(collectionsMap));
          
        //   }).catch((err)=>{
        //     dispatch(fetchCollectionsFailure(err.message));
        //   });



        // note sagas use PUT instead of DISPATCH
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        //call here invokes a function as it's first arguement and the parameters to be passed into the function the call invokes arer passed as the second aargument of the call function
        const collectionsMap =  yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
        
    } catch(e) {
        yield put(fetchCollectionsFailure(e.message));
    }
    



}


export function* fetchCollectionsStart(){
    //using either take, takeEvery or takeLatest..take follows the normal generator function yield after that that line cannot be accessed again except we induce a repeat using probably a while(true){ yield take(bla bla)} loop, takeEvery on the other hand spuns new saga instances of the same generator function passed into it so that way even after a yield that line will still be accessible in the next instance, but takeLatest spins many saga instances too like takeEvery but takes only the last spunned  instance and cancels the previous, so in our scenario here we obviously need takeLatest

    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}


export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}