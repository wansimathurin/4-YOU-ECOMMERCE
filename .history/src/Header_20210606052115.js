import Banner  from "./Banner.jp";
import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from  "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider"
function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
           {/**logo box */}
              <Link to="/">
                {/* <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" ></img> */}
                <img src="" alt="">
              </Link>
           {/**search box */}
              <div className="header__search">
                <input type="text" className="header__searchInput"></input> 
                <SearchIcon className="hearder__searchIcon" />
              </div>
          {/**3 links box */}   
                  <div className="hearder__nav">
                    {/**1st links box */}
                          <div className="hearder__option">
                                <Link to="/login" className="hearder__link">
                                    <span className="hearder__optionLineOne">Hello Code</span>
                                    <span className="hearder__optionLineTwo">Sign In</span>
                                </Link>
                          </div>
                    {/**2nd links box */}
                          <div className="hearder__option">
                                <Link to="/" className="hearder__link">
                                    <span className="hearder__optionLineOne">Returns</span>
                                    <span className="hearder__optionLineTwo">& Orders</span>
                                </Link>
                          </div>
                        
                    {/**3rd links box */} 
                        <div className="hearder__option">
                              <Link to="/" className="hearder__link">
                                  <span className="hearder__optionLineOne">Your</span>
                                  <span className="hearder__optionLineTwo">Prime</span>
                              </Link>
                        </div>

                    {/**4th links box */}
                        <Link to="/checkout" className="hearder__link">
                          <div className="header__optionBasket">
                              <ShoppingBasketIcon  />
                              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                          </div>
                        </Link>
                  </div>

        </nav>
    )
}

export default Header;
