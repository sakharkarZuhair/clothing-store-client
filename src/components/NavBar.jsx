import "../styles/NavBar.css";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navBarBigContainer">
      <div className="navBarContainer px-10 py-4 bg-white">
        <div className="navBarFirstSection flex justify-between items-center">
          <div className="navBarHeadingTitle">
            <h1 className="text-2xl">
              <span className="font-bold">COZA</span>STORE
            </h1>
          </div>
          <div className="navBarLinks">
            <ul className="navBarUnorderesList flex gap-4 items-center font-lg">
              <li className="cursor-pointer">
                <AiOutlineShoppingCart size={26} />
              </li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
