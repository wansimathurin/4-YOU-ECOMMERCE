import React from 'react'

function CheckoutProduct({id,title,image, price,rating}) {
    return (
        <div className="CheckoutProduct">
           <img src={image} alt=""></img>
           <div CheckoutProduct__info>
               <p className="CheckoutProduct__tittle">{tittle}</p>
           </div>
        </div>
    )
}

export default CheckoutProduct
