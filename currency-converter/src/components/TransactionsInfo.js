import React from 'react'

function TransactionsInfo({ transactions }) {
    let maxAmount = Math.max(...transactions.map(transaction => transaction.amountInEur));
    let highestTransaction = transactions.find(transaction => transaction.amountInEur == maxAmount);

    return (
        <>
            <div className='info_container'>{!transactions.length ?
                <>
                    <h2>Transaction with the largest amount</h2>
                    <p>Name of transaction:<span>n/a</span></p>
                    <p>Amount in EUR: <span>n/a</span></p>
                    <p>Amount in PLN: <span>n/a</span>
                    </p>
                </> :
                <>
                    <h2>Transaction with the largest amount</h2>
                    <p>Name of transaction:
                        <span> {highestTransaction.name}</span>
                    </p>
                    <p>Amount in EUR:
                    <span> {parseFloat(highestTransaction.amountInEur).toFixed(2)}</span>
                    </p>
                    <p>Amount in PLN:
                    <span> {((parseFloat(highestTransaction.amountInEur)) * (highestTransaction.rateInTransactionTime)).toFixed(2)}</span>
                    </p>
                </>
            }
                <h3>Number of transactions:
                <span> {transactions.length} </span>
                </h3>
            </div>

        </>
    )
}

export default TransactionsInfo
