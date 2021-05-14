import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IqUu0SJyAwKJojTbbG6hvvATyN1fVesSnZ5unjiiywgYFkK3SdNunKd09ZJz680XjmrpUIBZi5L4plQ21LGw7cb00qxYaFuQV');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
          console.log("THE USER IS >>>> ", authUser);

          if(authUser) {
            //the user just logged in
            dispatch({
                type: 'SET_USER',
                user: authUser
            })
          } else {
            //the user is logged out
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
      });
  }, []);

  return (
    <Router>
     
      <Switch>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/checkout"> 
          <Header/>
          <Checkout/>
        </Route>
        <Route path = "/payment">
          <Header/>
          <Elements stripe = {promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path = "/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
