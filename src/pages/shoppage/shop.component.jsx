 import React from 'react';

//nested routing
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component { 
 
  componentDidMount(){
    const { fetchCollectionsStart} = this.props;
     fetchCollectionsStart();
  }
  render(){
    const {match} = this.props;
    
    return (
        
        
            <div className='shop-page'>
              {/* unlike what we did in app js we must specify exact for the single route in this nested route implementation shop else the shop/collectionId route would also be visiting the /shop only route thereby making all the data of /shop to show in /shop/collectionId */}
              <Route  exact path={`${match.path}`} component={CollectionsOverviewContainer} /> 


              <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>

            </div>
      )
  }


}


const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
 
export default connect(null, mapDispatchToProps)(ShopPage);
