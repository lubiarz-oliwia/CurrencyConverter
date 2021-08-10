import React from 'react';

function TransactionNameInput({ transactionName, setTransactionName }) {
    return (
        <form className='form_transaction_name'>
            <label>
                Transaction name:
            </label>
            <input
                type="text"
                value={transactionName}
                onChange={e => setTransactionName(e.target.value)}
            >
            </input>
        </form>
    )
}

export default TransactionNameInput;
