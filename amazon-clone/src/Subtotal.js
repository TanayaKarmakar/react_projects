import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    //const totalPrice = basket.reduce((prev, next) => prev + next.price, 0);

    return (
        <div className = "subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): 
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className = "subtotal__gift">
                            <input type = "checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                //value = {totalPrice}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
    
};

export default Subtotal;