import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
  return <div>
    <h1>HATS</h1>
  </div>
}


function App(){
  return (
    <div>
      <Switch>
      <Route exact={true} path='/' component={HomePage} />
      <Route exact={true} path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}


export default App;
