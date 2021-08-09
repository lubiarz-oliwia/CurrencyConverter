import React from 'react'

function TransactionsInfo({ transactions }) {
    let maxAmount = Math.max(...transactions.map(e => e.amountInEur));
    let highestTransaction = transactions.find(transaction => transaction.amountInEur == maxAmount);


    return (
        <>
            <div>{!transactions.length ?
                <>
                    <h1>Transaction with the largest amount:</h1>
                    <h2>Name of transaction:</h2>
                    <p>n/a</p>
                    <h2>Amount in EUR</h2>
                    <p>n/a</p>
                    <h2>Amount in PLN</h2>
                    <p>n/a</p>
                </> :
                <>
                    <h1>Transaction with the largest amount:</h1>
                    <h2>Name of transaction:</h2>
                    <p>{highestTransaction.name}</p>
                    <h2>Amount in EUR</h2>
                    <p>{highestTransaction.amountInEur}</p>
                    <h2>Amount in PLN</h2>
                    <p>{(highestTransaction.amountInEur) * (highestTransaction.rateInTransactionTime)}</p>
                </>
            }
            </div>
            <h2>Number of all transactions</h2>
            <span>{transactions.length}</span>
        </>
    )
}

export default TransactionsInfo
