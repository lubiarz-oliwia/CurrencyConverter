import React from 'react';

function TransactionNameInput({ transactionName, setTransactionName }) {
    return (
        <form>
            <label>
                Transaction name:
                <input
                    type="text"
                    value={transactionName}
                    onChange={e => setTransactionName(e.target.value)}
                >
                </input>
            </label>
        </form>
    )
}

export default TransactionNameInput;
