 
import React from 'react';

//nested routing
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shop.actions';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component { 
  //another way of invoking state if we dont really need to initiate the constructor
  state={
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidCatch(){
    const {updateTheCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    //firebase listener method*observer pattern
    // this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    // updateTheCollections(collectionsMap);
    // this.setState({loading: false});
    // });

    //getting data from firebase using promise
      this.unsubscribeFromSnapshot=collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateTheCollections(collectionsMap);
      this.setState({loading: false});
      });

      
    //getting data from firebase usinf fetch api call

    //  fetch('https://firestore.googleapis.com/v1/projects/yipee-bcb82/databases/(default)/documents/collections').then(respinse=> Response.json())


  }
  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
        
        
            <div className='shop-page'>
              <Route exact path={`${match.path}`} render={ (props) =>  <CollectionOverviewWithSpinner isLoading={loading} {...props} />  
              } /> 
              <Route path={`${match.path}/:collectionId`} render={ (props) => 
               <CollectionPageWithSpinner isLoading={loading} {...props} /> } />

            </div>
      )
  }


}

const mapDispatchToProps = dispatch =>({
  updateTheCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
 
export default connect(null, mapDispatchToProps)(ShopPage);
