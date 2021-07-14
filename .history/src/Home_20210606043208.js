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
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/03/%EB%A7%90%ED%8B%B0%EC%95%941-600x600.jpg"
                    />
              <Product
                    id="12321341"
                    title="Poodle (Roy)"
                    price={4000}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/04/KakaoTalk_20200414_142750435-600x600.jpg"
                    />
            <Product
                    id="12321341"
                    title="Poodle (Leo)"
                    price={4000}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/04/KakaoTalk_20200414_142811550-600x600.jpg"
                    />
            </div>
            <div className="home__row">
            <Product
                    id="12321341"
                    title="Losa Pomeranian (Losa)"
                    price={3400}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/04/IMG_5363-1-600x600.jpg"
                    />
              <Product
                    id="12321341"
                    title="Pomeranian ( Hoya )"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2021/04/IMG_7644-600x600.jpg"
                    />
                 <Product
                    id="12321341"
                    title="Toby Maltese (Toby)"
                    price={4300}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2021/04/KakaoTalk_20210404_183354364-600x600.jpg"
                    />
                     <Product
                    id="12321341"
                    title="Ollie Poodle ( Ollie )"
                    price={3000}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2021/04/KakaoTalk_20210404_183355940-600x600.jpg"
                    />
            </div>
        </div>
        
      
    )
}

export default Home
