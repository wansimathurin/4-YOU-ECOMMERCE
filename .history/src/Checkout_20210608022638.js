import React from 'react';
import {useStateValue} from "./StateProvider"

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            <img className="Checkout__" src="" alt="">
        </div>
    )
}

export default Checkout
