import React, { useState } from 'react'
import '../css/currency.css'
import { BsCurrencyExchange } from "react-icons/bs";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_l7gxIou92Bvs69XqGlqOY2Ln32IqB4JAZDSCxuxi";



function Currency() {
    let [firstAmount, setFirstAmount] = useState(0);
    let [firstCurrency, setFirstCurrency] = useState('USD');
    let [secondCurrency, setSecondCurrency] = useState('TRY');
    let [secondAmount, setSecondAmount] = useState(0);

    let exchange = async () => {
        let response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${firstCurrency}`);
        let result = (response.data.data[secondCurrency] * firstAmount).toFixed(4);
        setSecondAmount(result);
    }


    return (
        <div className='main-div'>
            <div className='title'>
                <h3>Exchange Rate Calculator</h3>
            </div>
            <div>
                <input
                    value={firstAmount}
                    onChange={(e) => setFirstAmount(e.target.value)}

                    type="number" className='first-input' />
                <select onChange={(e) => setFirstCurrency(e.target.value)} className='first-currency-select'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <BsCurrencyExchange className='exchange-button' />


                <select onChange={(e) => setSecondCurrency(e.target.value)} className='second-currency-select'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input
                    value={secondAmount}
                    onChange={(e) => setSecondAmount(e.target.value)}
                    type="number" className='second-input' />

            </div>

            <div>
                <button
                    onClick={exchange}
                    className='convert-button'>
                    Convert
                </button>
            </div>

        </div>
    )
}

export default Currency
