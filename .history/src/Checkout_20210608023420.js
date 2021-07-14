import React from 'react';
import {useStateValue} from "./StateProvider";
import "./C"

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2021/ACQ/Gateway/PD21/4MFree/FR-FR_041921_PD4MonthsFREE_ACQ_GW_Hero_D_1500x600_CV2._CB668970359_.jpg" alt=""></img>
        </div>
    )
}

export default Checkout