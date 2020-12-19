 import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import {selectCurrentUser} from  './redux/user/user.selector'

import {checkUserSession} from './redux/user/user.actions' 


import {GlobalStyle} from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({userSession, currentUser}) => {
 



  useEffect(()=>{
    
    userSession();

    // since we know checkUser session would not update we could pass it in the useEffect array to prevent unneeded rerender
  }, [checkUserSession]);

 
  
    return (
      <div>
      <GlobalStyle />
        <Header />
        <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
        <Route exact={true} path='/' component={HomePage} />
        

        {/* because shop page is going to also be used as a nested route we cannot pass exact true in it since we could also have a shop/something */}
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route exact={true} path='/login' render={()=> currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)}/>
        </Suspense>
        </ErrorBoundary>
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
