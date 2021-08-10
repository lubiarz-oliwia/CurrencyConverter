import React, { useState } from 'react';
import AmountInput from './converterElements/AmountInput';
import RateChanger from './converterElements/RateChanger';
import TransactionNameInput from './converterElements/TransactionNameInput';

function Converter({ rate, setRate, transactions, setTransactions }) {
    const [addTransaction, setAddTransaction] = useState(false);
    const [amount, setAmount] = useState('');
    const [transactionName, setTransactionName] = useState('');
    const [error, setError] = useState(false)

    const saveTransaction = () => {
        if (amount <= 0 || transactionName.length < 3) {
            setError(true);
        } else {
            setTransactions([...transactions, {
                name: transactionName,
                amountInEur: amount,
                rateInTransactionTime: rate,
                id: Math.random()
            }
            ])
            setAddTransaction(false);
            setAmount('');
            setTransactionName('');
            setError(false);
        }
    }

    return (
        <div className='converter_container'>
            <h2>Currency converter</h2>
            <RateChanger
                rate={rate}
                setRate={setRate}
            />
            <AmountInput
                amount={amount}
                setAmount={setAmount}
                rate={rate}
            />
            {addTransaction ?
                <>
                    <TransactionNameInput
                        transactionName={transactionName}
                        setTransactionName={setTransactionName}
                    />
                    {error ? <p className='error'>Fill in the blanks</p> : null}
                    <button
                        className='btn_converter'
                        onClick={saveTransaction}
                    >
                        Save
                        </button>
                </>
                :
                <button
                    className='btn_converter'
                    onClick={() => setAddTransaction(!addTransaction)}
                >
                    Add this transaction
                    </button>}
        </div>
    )
}

export default Converter
