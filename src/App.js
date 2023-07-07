//import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
//import AddTransaction from './components/add';
//import DisplayTransaction from './components/displayTransaction';
import NoPageFound from './components/noPageFound';

import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ResetPassword from './components/forgotPassword';
import { collection, getDocs} from 'firebase/firestore';
import { db } from './config/firebase';
import CurrencyConvert from './components/currency';
//import { async } from '@firebase/util';

function App() {

 

  const [transactions, setTransactions]= useState([]);

 const add = async (transactionItem, amount, transactionType) => {
  setTransactions((transactions) => [
    ...transactions, {
      transactionItem:transactionItem,
      amount:amount,
      transactionType:transactionType,
    },
  ]);
 };


 useEffect(()=>{
  getTransaction();

 })
 const getTransaction = (async()=>{
    try {
      const querySnapShot = await getDocs(collection(db, "transaction"));
      const data = querySnapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))

      setTransactions(data);
      console.log(data)
    } catch (error) {
      
    }
 })
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Login/>

        </Route>
        <Route path="/home">
        <Home add={add} transactions={transactions}/>
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>

          <Route path="*">
            <NoPageFound/>
          </Route>
            

        <Route path="/forgotpassword">
          <ResetPassword/>
        </Route>
          <Route path="/currencyconvertor">
            <CurrencyConvert/>
            
            

        </Route>

        <Route path="*">
          <NoPageFound/>
        </Route>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
