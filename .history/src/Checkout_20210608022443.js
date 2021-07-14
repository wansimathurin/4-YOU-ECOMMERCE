import React from 'react';
import {useStateValue} from ""

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            
        </div>
    )
}

export default Checkout
