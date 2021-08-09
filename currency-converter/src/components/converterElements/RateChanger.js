import React, { useState } from 'react';

function RateChanger({ rate, setRate }) {
    const [rateEditable, setRateEditable] = useState(false);

    const editRate = () => {
        setRateEditable(true);
    }

    const saveNewRate = (e) => {
        const value = e.target.elements.amount.value;
        e.preventDefault();
        setRateEditable(false);
        setRate(value);
    }

    const cancelRateEdition = () => {
        setRateEditable(false);
    }

    return (
        <div>
            <div className='rate_editor'>
                {!rateEditable ?
                    <>
                        <h2> 1 EUR is equvalent to {rate} PLN</h2>
                        <button
                            onClick={editRate}
                        >
                            Edit</button>
                    </> : <form
                        onSubmit={saveNewRate}
                    >
                        <h1>1 EUR is equvalent to
                            <input
                                type="number"
                                name="amount"
                                step='any'
                                min={0.01}
                            >
                            </input>
                       PLN
                        </h1>
                        <button
                            type='submit'
                        >
                            Save new rate
                            </button>
                        <button
                            onClick={cancelRateEdition}
                        >
                            Cancel
                        </button>
                    </form>}
            </div>
        </div>
    )
}

export default RateChanger;
