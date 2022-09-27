import "../styles/HomeScreen.css";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="bigHomeScreenContainer">
      <div className="homeScreenContainer">
        <div
          className="homeScreenMenSection"
          style={{ backgroundColor: "#f0f0e6", height: "80%" }}
        >
          <div className="homeScreenFirstSection">
            <h2 className="font-semibold">Men Collection 2022</h2>
            <h4 className="font-bold">New Season</h4>
            <button className="bg-blue-200 font-semibold">Shop Now</button>
          </div>
          <div className="homeScreenManImageSection">
            <img className="" src="./menFashion.jpg" alt="" />
          </div>
        </div>
        <div
          className="homeScreenWomanSection"
          style={{ backgroundColor: "white", height: "80%" }}
        >
          <div className="homeScreenWomanImageSection">
            <img className="" src="./womanFashion.jpg" alt="" />
          </div>
          <div className="homeScreenFirstSection">
            <h2 className="font-semibold">Women Collection 2022</h2>
            <h4 className="font-bold">New Arrival</h4>
            <button className="bg-blue-200 font-semibold">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
