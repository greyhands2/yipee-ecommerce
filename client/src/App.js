import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import {selectCurrentUser} from  './redux/user/user.selector'

import {checkUserSession} from './redux/user/user.actions' 

const App = ({userSession, currentUser}) => {
 



  useEffect(()=>{
    
    userSession();

    // since we know checkUser session would not update we could pass it in the useEffect array to prevent unneeded rerender
  }, [checkUserSession]);

 
  
    return (
      <div>
        <Header />
        <Switch>
        <Route exact={true} path='/' component={HomePage} />
        {/* because shop page is going to also be used as a nested route we cannot pass exact true in it since we could also have a shop/something */}
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route exact={true} path='/login' render={()=> currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    )
  
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) =>({
  userSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
