import React from 'react'

function CheckoutProduct({id,tittle,image, price,rating}) {
    return (
        <div className="CheckoutProduct">
           <img src={image} alt=""></img>
           <div CheckoutProduct__info>
               <p className="CheckoutProduct__tittle">{tittle}</p>
               <p className="CheckoutProduct__Price">
                   <small>$</small>
                   <strong> {price} </strong>
               </p>
               <div className="CheckoutProduct__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
                <button oncl></button>
           </div>
        </div>
    )
}

export default CheckoutProduct
