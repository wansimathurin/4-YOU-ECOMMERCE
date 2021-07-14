import React from 'react';
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"></img>
            <div className="home__row">
              <Product
                    id="12321341"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)by HP"
                    price={11.6}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                    />
              <Product
                    id="12321341"
                    title="
                    Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812by Acer"
                    price={64.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL.jpg"
                    />
            </div>
            <div className="home__row">
              <Product
                    id="12321341"
                    title="Laptop Stand, Ergonomic Aluminum Computer Stand for Desk,Protable Detachable Laptop Riser Holder Compatibl"
                    price={1901.6}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61RL4VcyASL._AC_UL320_.jpg"
                    />
              <Product
                    id="12321341"
                    title="
                    Simple Mobile Prepaid - Apple Iphone 11 (64GB) - Black [Locked to Carrier – Simple Mobile]"
                    price={30099.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_UY218_.jpg"
                    />
                       <Product
                    id="12321341"
                    title="Samsung Galaxy Note20 Ultra 5G (N986B-DS) 256GB 12GB RAM International Version - Mystic Bronze"
                    price={2453.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71rSHVCL5cL._AC_UY218_.jpg"
                    />
            </div>
            <div className="home__row">
            <Product
                    id="12321341"
                    title="Amazon Basics Dog and Puppy Leak-proof 5-Layer Potty Training Pads with Quick-dry Surface by Amazon Basics"
                    price={32.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31iVBTwa8KL.jpg"
                    />
            </div>
        </div>
        
      
    )
}

export default Home
