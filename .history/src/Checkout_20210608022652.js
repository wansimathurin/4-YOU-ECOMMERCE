import React from 'react';
import {useStateValue} from "./StateProvider"

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            <img className="checkout__ad" src="" alt=""></
        </div>
    )
}

export default Checkout
