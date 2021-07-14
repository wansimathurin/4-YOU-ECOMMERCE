import React from 'react';
import {useStateValue} from "./StateProvider";
import "./CheckoutProduct.css"

function CheckoutProduct({title,image, price,rating}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket= () =>{

    }
    return (
        <div className="CheckoutProduct">
           <img className="CheckoutProduct__img" src={image} alt=""></img>
           <div className="CheckoutProduct__info">
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
                <button onClick={removeFromBasket} >Remove from basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
