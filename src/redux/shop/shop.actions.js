import {ShopActionTypes} from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
    
});

export const fetchCollectionsSuccess = collectionsMap =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    
    payload: collectionsMap
});


export const fetchCollectionsFailure = (errorMessage) =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    
    return dispatch =>{
       
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    //firebase listener method*observer pattern
    // this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    // updateTheCollections(collectionsMap);
    // this.setState({loading: false});
    // });

    //getting data from firebase using promise
      collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        
      dispatch(fetchCollectionsSuccess(collectionsMap));
      
      }).catch((err)=>{
        dispatch(fetchCollectionsFailure(err.message));
      });
    }
}


