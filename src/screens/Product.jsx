import "../styles/Product.css";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Product = () => {
  const [sizeDropDown, setSizeDropDown] = useState(false);
  const [colorDropDown, setColorDropDown] = useState(false);
  return (
    <div className="productBigContainer">
      <div className="productContainer">
        <div className="productLeftContainer">
          <div className="productImage">
            <img src="/shirt.jpg" alt="" />
          </div>
        </div>
        <div className="productRightContainer">
          <h2 className="text-xl">
            <span className="text-gray-600 font-semibold">H&M</span> Shirt
          </h2>
          <h3 className="text-black font-bold mt-1 text-xl">$58.79</h3>
          <p className="w-[60%] text-gray-500 mt-2">
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>
          <div className="productColorSize">
            <div className="productSize flex justify-between w-[30%] items-center mt-6">
              <h4 className="font-semibold">Size</h4>
              <div
                onClick={() => setSizeDropDown(!sizeDropDown)}
                className="dropdownProduct flex items-center justify-between w-32 font-semibold p-1 relative cursor-pointer"
              >
                <div className="text-gray-700">Choose Size</div>
                <div>
                  <IoIosArrowDown size={18} />
                </div>
                {sizeDropDown === true && (
                  <div className="prodDrop absolute border w-[100%] top-10 left-0 text-gray-500 p-1 bg-white">
                    Size <span>S</span>
                  </div>
                )}
              </div>
            </div>
            <div className="productSize flex justify-between w-[30%] items-center mt-2">
              <h4 className="font-semibold">Color</h4>
              <div
                onClick={() => setColorDropDown(!colorDropDown)}
                className="dropdownProduct flex items-center justify-between w-32 font-semibold p-1 relative cursor-pointer"
              >
                <div className="text-gray-700">Choose Color</div>
                <div>
                  <IoIosArrowDown size={18} />
                </div>
                {colorDropDown === true && (
                  <div className="prodDrop absolute border w-[100%] top-10 left-0 text-gray-500 p-1 bg-white">
                    Black
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="productCartContainer flex w-[40%] justify-between items-center">
            <div className="productQty flex items-center w-[40%] border justify-between p-1">
              <div className="productMinus cursor-pointer">
                <AiOutlineMinus />
              </div>
              <div className="prodQty">1</div>
              <div className="productPlus cursor-pointer">
                <AiOutlinePlus />
              </div>
            </div>
            <div className="productAddToCartButton p-1 w-[50%] bg-blue-400 cursor-pointer">
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
