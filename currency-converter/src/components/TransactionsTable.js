import React from 'react';

function TransactionsTable({ transactions, rate, setTransactions }) {

    const calculateAmountSum = () => {
        let array = transactions.map((transaction) => {
            return parseFloat(transaction.amountInEur)
        })
        return array.reduce((a, b) => (a + b)).toFixed(2)
    };

    const calculateAmountSumPln = () => {
        let array = transactions.map((transaction) => {
            return parseFloat(transaction.amountInEur) * transaction.rateInTransactionTime
        })
        return array.reduce((a, b) => (a + b))
    };

    const deleteTransaction = (transactionId) => {
        let filteredTransactions = transactions.filter((el) => el.id !== transactionId)
        setTransactions([
            ...filteredTransactions
        ])
    };

    return (
        <table >
            <thead>
                <tr>
                    <th>Transaction name</th>
                    <th>Amount (EUR)</th>
                    <th>Rate in Transaction Time</th>
                    <th>Amount (PLN)</th>
                    <th>Amount (PLN) as of today</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!transactions.length ? null :
                    transactions.map((transaction, index) => {
                        return (
                            <tr key={index}>
                                <td>{transaction.name}</td>
                                <td>{parseFloat(transaction.amountInEur).toFixed(2)}</td>
                                <td>{parseFloat(transaction.rateInTransactionTime).toFixed(2)}</td>
                                <td>{(parseFloat(transaction.amountInEur) * transaction.rateInTransactionTime).toFixed(2)}</td>
                                <td>{(parseFloat(transaction.amountInEur) * rate).toFixed(2)}</td>
                                <td><button onClick={() => deleteTransaction(transaction.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
            </tbody>
            {!transactions.length ?
                null :
                <tfoot>
                    <tr>
                        <td>Total sum</td>
                        <td>{calculateAmountSum()}</td>
                        <td>N/A</td>
                        <td>{calculateAmountSumPln().toFixed(2)}</td>
                        <td>{(calculateAmountSum() * rate).toFixed(2)}</td>
                        <td>N/A</td>
                    </tr>
                </tfoot>}
        </table>
    )
}

export default TransactionsTable;
