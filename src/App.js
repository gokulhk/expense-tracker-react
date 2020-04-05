import React from 'react';
import './App.css';

//component imports
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
// import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import AddTransactionOne from './components/AddTransactionOne';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        {/* <AddTransaction />  */}
        <AddTransactionOne />
      </div>
    </GlobalProvider>

  );
}


export default App;
