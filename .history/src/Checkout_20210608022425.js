import React from 'react';
import {useStateValue}

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            
        </div>
    )
}

export default Checkout
