import React from 'react';

function AmountInput({ amount, setAmount, rate }) {
    return (
        <div className='amount_input'>
            <form className='form_amount_input'>
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder='insert amount'
                >
                </input> <span>EUR</span>
            </form>
            <div>
                <input
                    type="number"
                    value={rate * amount}
                >
                </input> <span>PLN</span>
            </div>
        </div>
    )
}

export default AmountInput;
