import React from 'react';
import {useStateValue} from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="Checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2021/ACQ/Gateway/PD21/4MFree/FR-FR_041921_PD4MonthsFREE_ACQ_GW_Hero_D_1500x600_CV2._CB668970359_.jpg" alt=""></img>
        {basket?.length == 0?(
            <div>
                <h1>your basket is empty</h1>
            </div>
        ):(
            <div>
                <h1>Your Basket</h1>
                {/* list out all products */}
                {basket.map(item =>(
                  <CheckoutProduct
                  item={item.id}
                  title={item.tittle}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
               
            </div>
        )}
        </div>
    )
}

export default Checkout
