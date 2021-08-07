import React from 'react'
import './modal.css'
import { useStateValue } from "./StateProvider"

function Modal({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        //Add item to basket...
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };
    return (
        <div data-simplebar className="Modal">
           <div  className="modal__details" >
               <div className="modal__img scrollbar" > 
                     <img  src={image} alt=""/>   
               </div>
               <div  className="modal__desc">
                   <div className="desc">
                        <h1> {title}</h1>
                        <h1 className="infos">Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.</h1>
                        <h1> {price}$ </h1>
                        <div className="product__rating rating">
                           <div>  {Array(rating).fill().map((index) => (
                        <i key={index} class="fas fa-star"></i>
                    ))}</div>
                          <button onClick={addToBasket}>Add to cart</button>
                        </div>
                   </div>
               </div>
           </div>  
        </div>
    )
}

export default Modal
