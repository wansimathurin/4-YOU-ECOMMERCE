import Banner  from "./Banner.jpg";
import React from 'react';
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={Banner}></img>
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
                    title="Bichon Frise (Leo)"
                    price={3500}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2019/10/KakaoTalk_20191021_131632881_08-600x600.jpg"
                    />
              <Product
                    id="12321341"
                    title="
                    Pomeranian (FoFo)"
                    price={4300}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2019/10/%ED%8C%8C%ED%8B%B0%ED%8F%AC%EB%A9%945-600x600.jpg"
                    />
            </div>
            <div className="home__row">
              <Product
                    id="12321341"
                    title="Maltese (Marry)"
                    price={1901.6}
                    rating={5}
                    image="http://loveteacuppuppy.com/wp-content/uploads/2019/10/KakaoTalk_20191002_125635189_09-600x600.jpg"
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
                    <video width="" height="" type controls src="https://www.instagram.com/p/CNhcTPWBA5H/">
                        
                    </video>
            </div>
        </div>
        
      
    )
}

export default Home
