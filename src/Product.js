import React from 'react'
import "./Product.css"
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider"
function Product({id, title, price, rating, image,link}) {

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
        <div className="product" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        
            <Link className="imgLink" to={link}>
               <img  src={image} alt=""/>
            </Link>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fas fa-star"></i>
                    ))}
                </div>
            </div>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}
export default Product