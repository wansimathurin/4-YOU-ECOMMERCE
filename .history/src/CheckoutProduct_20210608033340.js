import React from 'react';
import "./CheckoutProduct.css"

function CheckoutProduct({title,image, price,rating}) {
    return (
        <div className="CheckoutProduct">
           <img className="CheckoutProduct__img" src={image} alt=""></img>
           <div CheckoutProduct__info>
               <p className="CheckoutProduct__tittle">{title}</p>
               <p className="CheckoutProduct__Price">
                   <small>$</small>
                   <strong> {price} </strong>
               </p>
               <div className="CheckoutProduct__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
                <button >Remove from basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
