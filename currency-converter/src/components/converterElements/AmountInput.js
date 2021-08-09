import React from 'react';

function AmountInput({ amount, setAmount, rate }) {
    return (
        <div>
            <form>
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                >
                </input> <span>EUR</span>
            </form>
            <div> {rate * amount}
                <span>PLN</span>
            </div>
        </div>
    )
}

export default AmountInput;
