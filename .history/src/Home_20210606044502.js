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
                    title="Bichon Frise (Leo)"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/01/%EB%B9%84%EC%88%912-600x600.jpg"
                    />
                       <Product
                    id="12321341"
                    title="Pomeranian (Hoya)"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/01/KakaoTalk_20200128_184810841-600x600.jpg"
                    />
                       <Product
                    id="12321341"
                    title="Poodle (DoDo)"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2019/11/%ED%91%B8%EB%93%A4-600x600.jpg"
                    />
                       <Product
                    id="12321341"
                    title="http://loveteacuppuppy.com/wp-content/uploads/2019/10/%ED%8C%8C%ED%8B%B0%ED%8F%AC%EB%A9%945-600x600.jpg"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/01/%EB%B9%84%EC%88%912-600x600.jpg"
                    />
              <Product
                    id="12321341"
                    title="
                    Pomeranian (FoFo)"
                    price={4300}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2020/03/KakaoTalk_20200312_154920955-600x600.jpg"
                    />
            </div>
            <div className="home__row">
              <Product
                    id="12321341"
                    title="Maltese (Marry)"
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
