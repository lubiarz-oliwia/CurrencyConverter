import './App.css';
import React, { useState } from 'react';
import Converter from './components/Converter';
import TransactionsTable from './components/TransactionsTable';
import TransactionsInfo from './components/TransactionsInfo';

function App() {
  const [rate, setRate] = useState(5);
  const [transactions, setTransactions] = useState([{ name: 'transaction1', amountInEur: "123.56", rateInTransactionTime: 4, id: Math.random() },
  { name: 'transaction2', amountInEur: "12.12", rateInTransactionTime: 4.5687, id: Math.random() }]);

  console.log(transactions)

  return (
    <div className='container'>
      <div className='top_container'>
        <Converter
          rate={rate}
          setRate={setRate}
          amountInEur={transactions.amountInEur}
          setTransactions={setTransactions}
          transactions={transactions}
        />
        <TransactionsInfo
          transactions={transactions}
        />
      </div>
      <TransactionsTable
        setTransactions={setTransactions}
        transactions={transactions}
        rate={rate}
      />
    </div>
  );
}

export default App;
