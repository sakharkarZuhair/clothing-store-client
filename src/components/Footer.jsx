import React from "react";
import "../styles/Footer.css";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footerMainContainer">
        <div className="footerSectionContainer">
          <div className="footerFirstSection">
            <h4 className="text-white font-bold">CATEGORIES</h4>
            <ul className="text-white mt-10 font-semibold">
              <li className="mt-2">Women</li>
              <li className="mt-2">Men</li>
              <li className="mt-2">Bags</li>
              <li className="mt-2">Watches</li>
            </ul>
          </div>
          <div className="footerSecondSection">
            <h4 className="text-white font-bold">HELP</h4>
            <ul className="text-white mt-10 font-semibold">
              <li className="mt-2">Women</li>
              <li className="mt-2">Men</li>
              <li className="mt-2">Bags</li>
              <li className="mt-2">Watches</li>
            </ul>
          </div>
          <div className="footerThirdSection">
            <h4 className="text-white font-bold">GET IN TOUCH</h4>
            <ul className="text-white mt-10">
              <li>
                Any questions? Let us know in store at 8th floor,
                <br /> 379 Hudson St, New York, NY 10018 or call us on (+1) 96
                716 6879
              </li>
              <div className="flex mt-5 gap-4">
                <AiOutlineInstagram size={26} />
                <AiOutlineFacebook size={26} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
