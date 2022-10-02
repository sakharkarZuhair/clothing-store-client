import "../styles/ProductsScreen.css";
import React from "react";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const ProductsScreen = () => {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <div className="productsScreenBigContainer">
      <div className="productsScreenConatiner">
        <div className="productsScreenTopContainer relative">
          <div className="productsScreenLinks">
            <ul className="flex gap-6">
              <li className="cursor-pointer">All Products</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Watches</li>
            </ul>
          </div>
          <div
            onClick={() => setSearchBar(!searchBar)}
            className="productsScreenSearchBar gap-2 relative cursor-pointer"
          >
            {searchBar === false ? (
              <div>
                <AiOutlineSearch />
              </div>
            ) : (
              <div>
                <AiOutlineClose />
              </div>
            )}
            <div>Search</div>
          </div>
          {searchBar === true && (
            <input
              contentEditable="true"
              placeholder="Search"
              className="productsSearchBarInput border absolute top-14 w-[100%] p-2"
            />
          )}
        </div>
        <div className="productsScreenCards">
          <div className="productsScreenCard">
            <div className="productsScreenImage">
              <img src="/womenCardOne.jpg" alt="" />
            </div>
            <div className="productsScreenDesc">
              <h3>
                H&M <span className="font-semibold">T-shirt</span>
              </h3>
              <h4 className="font-semibold">$120</h4>
            </div>
          </div>
          <div className="productsScreenCard">
            <div className="productsScreenImage">
              <img src="/womenCardOne.jpg" alt="" />
            </div>
            <div className="productsScreenDesc">
              <h3>
                H&M <span className="font-semibold">T-shirt</span>
              </h3>
              <h4 className="font-semibold">$120</h4>
            </div>
          </div>
          <div className="productsScreenCard">
            <div className="productsScreenImage">
              <img src="/womenCardOne.jpg" alt="" />
            </div>
            <div className="productsScreenDesc">
              <h3>
                H&M <span className="font-semibold">T-shirt</span>
              </h3>
              <h4 className="font-semibold">$120</h4>
            </div>
          </div>
          <div className="productsScreenCard">
            <div className="productsScreenImage">
              <img src="/womenCardOne.jpg" alt="" />
            </div>
            <div className="productsScreenDesc">
              <h3>
                H&M <span>T-shirt</span>
              </h3>
              <h4>$120</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
