import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from  './redux/user/user.selector'

// import {selectCollectionsForPreview} from './redux/shop/shop.selectors';


class App extends React.Component{
 

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
          });
        });

        
      }
      setCurrentUser(userAuth);
     
      // addCollectionAndDocuments('collections',collectionsArray.map(({title, items})=> ({title, items})));





    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact={true} path='/' component={HomePage} />
        {/* because shop page is going to also be used as a nested route we cannot pass exact true in it */}
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route exact={true} path='/login' render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    )
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
