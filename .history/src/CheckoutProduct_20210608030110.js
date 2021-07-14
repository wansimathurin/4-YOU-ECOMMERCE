import React from 'react'

function CheckoutProduct({id,title,image, price,rating}) {
    return (
        <div className="CheckoutProduct">
           <img src={image} alt=""></img>
           <div CheckoutProduct__info>
               
           </div>
        </div>
    )
}

export default CheckoutProduct
