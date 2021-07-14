import Banner  from "./Banner.jpg";
import video  from "./video.mp4";
import React from 'react';
import Product from "./Product"
import "./Home.css";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className="home">
             <Carousel 
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={3000}
             > 
                  <div>
                        <img className="home__image" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"></img>
                  </div>
                  <div>
                     <img className="home__image" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt=""></img>
                 </div>
                 <div>
                 <img className="home__image" loading="lazy" src="https://links.papareact.com/6ff" alt=""></img>
                 </div>
                 <div>
                 <img className="home__image" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt=""></img> 
                </div>
            
            </Carousel>
        <div className="home__row row">
              <Product
                    id="12321341"
                    title="Oculus Quest"
                    price={3500}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
                    />
                       <Product 
                    id="12321341"
                    title="
                    Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor "
                    price={3500}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg"
                    />
                       <Product
                    id="12321341"
                    title="Reebok Boys' Active Hoodie "
                    price={3500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vW1gpiNNL._AC_UL320_.jpg"
                    />
                       <Product
                    id="12321341"
                    title="SAMSUNG Galaxy S21 Ultra 5G  128GB"
                    price={3500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61O45C5qASL._AC_UY218_.jpg"
                    />
              <Product
                    id="12321341"
                    title="
                    Simple Mobile Prepaid - Apple iPhone X (64GB) - Silver"
                    price={4300}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/618ZI2Xyw+L._AC_UY218_.jpg"
                    />
            </div>
            <div className="home__row">
              <Product
                    id="12321341"
                    title="SteelSeries Apex 5 Hybrid "
                    price={1901.6}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81yd9W+0doL._AC_UY218_.jpg"
                    />
              <Product
                    id="12321341"
                    title="Lenovo Flex 5 14"
                    price={4000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SX679_.jpg"
                    />
            <Product
                    id="12321341"
                    title="Poodle (Leo)"
                    price={4000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41OkvAK0P+L._AC_SR320,320_.jpg"
                    />
            </div>
             <div className="home__row">
                        <Product
                                id="12321341"
                                title="Chic Home Ayelet 10 Piece Comforter Set Color Block"
                                price={4000}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/81LA0+qmI1S._AC_UL320_.jpg"
                                />
                                <Product
                                id="12321341"
                                title="Dreaming Wapiti Duvet Cover,100% Washed Microfiber "
                                price={2800}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL320_.jpg"
                                />
             </div>
             <div className="home__row">
                        <Product
                                id="12321341"
                                title="Soundance Laptop Stand, Aluminum Computer Riser, "
                                price={4000}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_UL320_.jpg"
                                />
                                <Product
                                id="12321341"
                                title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) "
                                price={2800}
                                rating={5}
                                image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SY220_.jpg"
                                />
                                   <Product
                                id="4444"
                                title="GearLight LED Tactical Flashlight S1000 [2 Pack]"
                                price={2800}
                                rating={3}
                                image="https://images-na.ssl-images-amazon.com/images/I/51zzFKd24pL.jpg"
                                />
             </div>
        </div>
        
      
    )
}

export default Home
