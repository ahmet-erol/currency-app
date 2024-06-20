import React from 'react'
import '../css/currency.css'
import { BsCurrencyExchange } from "react-icons/bs";

function Currency() {
    return (
        <div className='main-div'>
            <div className='title'>
                <h3>Exchange Rate Calculator</h3>
            </div>
            <div>
                <input type="number" className='first-input' />
                <select className='first-currency-select'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <BsCurrencyExchange className='exchange-button' />


                <select className='second-currency-select'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input type="number" className='second-input' />
            </div>

        </div>
    )
}

export default Currency
