import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function RateChanger({ rate, setRate }) {
    const [rateEditable, setRateEditable] = useState(false);
    const [error, setError] = useState(false)

    const editRate = () => {
        setRateEditable(true);
    }

    const saveNewRate = (e) => {
        e.preventDefault();

        const value = e.target.elements.amount.value;
        if (value.length <= 0) {
            setError(true);
        }
        else {
            setRateEditable(false);
            setRate(value);
        }
    }

    const cancelRateEdition = () => {
        setRateEditable(false);
    }

    return (
        <div className='rate_editor'>
            {!rateEditable ?
                <>
                    <h3> 1 EUR is equvalent to {rate} PLN
                    <button
                            className='edit_btn'
                            onClick={editRate}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </h3>
                </> :
                <form
                    className='form_rate_editor'
                    onSubmit={saveNewRate}
                >
                    <h3>1 EUR is equvalent to
                            <input
                            type="number"
                            name="amount"
                            step='any'
                            min={0.01}
                        >
                        </input>
                       PLN
                        </h3>
                    {error ? <p className='error'>Fill in the blanks</p> : null}
                    <div className='form_box_btn'>
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

                    </div>
                </form>}
        </div>
    )
}

export default RateChanger;
