 import React, {useEffect, lazy, Suspense} from 'react';

//nested routing
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';




const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));

const CollectionPageContainer = lazy(() => import('../collection/collection.container'));




const ShopPage = ({match, fetchCollectionsStart}) => { 
 
  useEffect(()=>{
   
     fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  
    
    
    return (
        
        
            <div className='shop-page'>
              {/* unlike what we did in app js we must specify exact for the single route in this nested route implementation shop else the shop/collectionId route would also be visiting the /shop only route thereby making all the data of /shop to show in /shop/collectionId */}

              <Suspense fallback={<Spinner />}>
              <Route  exact path={`${match.path}`} component={CollectionsOverviewContainer} /> 


              <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
              </Suspense>
            </div>
      )
  


}


const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
 
export default connect(null, mapDispatchToProps)(ShopPage);
