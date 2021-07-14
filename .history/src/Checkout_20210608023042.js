import React from 'react';
import {useStateValue} from "./StateProvider"

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            <img className="checkout__ad" src="https://www.amazon.fr/music/unlimited/ref=dmm_gw_her_d_acq_PD21_4fF_0601_fr?pf_rd_r=5SA1KZ5JEEQNV0P7TE8F&pf_rd_p=7aa0e248-c673-4c01-b763-f43a23bca56e" alt=""></img>
        </div>
    )
}

export default Checkout
