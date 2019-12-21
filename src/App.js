import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';





function App(){
  return (
    <div>
      <Header />
      <Switch>
      <Route exact={true} path='/' component={HomePage} />
      <Route exact={true} path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}


export default App;
