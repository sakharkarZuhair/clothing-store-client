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
        <div className="homeScreenCollectionSection">
          <div className="homeScreenCollectionCardContainer">
            <div className="homeScreenCollectionCard">
              <div className="homeScreenCollectionCardDesc">
                <h5>Women</h5>
                <p>Winter 2022</p>
              </div>
              <div className="homeScreenCollectionCardImage">
                <img src="./womenCollection.jpg" alt="" />
              </div>
            </div>
            <div className="homeScreenCollectionCard">
              <div className="homeScreenCollectionCardDesc">
                <h5>Men</h5>
                <p className="">Winter 2022</p>
              </div>
              <div className="homeScreenCollectionCardImage">
                <img src="./menCollection.jpg" alt="" />
              </div>
            </div>
            <div className="homeScreenCollectionCard">
              <div className="homeScreenCollectionCardDesc">
                <h5>Watches</h5>
                <p>New Collection</p>
              </div>
              <div className="homeScreenCollectionCardImage">
                <img src="./watch.jpg" alt="" />
              </div>
            </div>
            <div className="homeScreenCollectionCard">
              <div className="homeScreenCollectionCardDesc">
                <h5>Bags</h5>
                <p>Trending</p>
              </div>
              <div className="homeScreenCollectionCardImage">
                <img src="./bags.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-center text-4xl font-bold">Our Blogs</h6>
        <div className="homeScreenOurBlogContainer">
          <div className="homeScreenBlogContainerInnerContainer">
            <div className="homeScreenOurBlog">
              <div className="homeScreenBlogImage">
                <img src="./blogOne.jpg" alt="" />
              </div>
              <div>
                <p className="text-gray-500 mt-4">
                  By <span className="font-semibold text-black">Zuhair</span> on{" "}
                  <span className="font-semibold text-black">
                    July 25, 2022{" "}
                  </span>
                </p>
                <h6 className="font-bold mt-3">
                  8 Inspiring Ways to Wear Dresses in Winter
                </h6>
                <h4 className="text-gray-500 mt-3">
                  Duis ut velit gravida nibh bibendum commodo. Suspendisse
                  pellentesque mattis augue id euismod. Interdum et male-suada
                  fames
                </h4>
              </div>
            </div>
          </div>
          <div className="homeScreenBlogContainerInnerContainer">
            <div className="homeScreenOurBlog">
              <div className="homeScreenBlogImage">
                <img src="./blogOne.jpg" alt="" />
              </div>
              <div>
                <p className="text-gray-500 mt-4">
                  By <span className="font-semibold text-black">Zuhair</span> on{" "}
                  <span className="font-semibold text-black">
                    July 25, 2022{" "}
                  </span>
                </p>
                <h6 className="font-bold mt-3">
                  8 Inspiring Ways to Wear Dresses in Winter
                </h6>
                <h4 className="text-gray-500 mt-3">
                  Duis ut velit gravida nibh bibendum commodo. Suspendisse
                  pellentesque mattis augue id euismod. Interdum et male-suada
                  fames
                </h4>
              </div>
            </div>
          </div>
          <div className="homeScreenBlogContainerInnerContainer">
            <div className="homeScreenOurBlog">
              <div className="homeScreenBlogImage">
                <img src="./blogOne.jpg" alt="" />
              </div>
              <div>
                <p className="text-gray-500 mt-4">
                  By <span className="font-semibold text-black">Zuhair</span> on{" "}
                  <span className="font-semibold text-black">
                    July 25, 2022{" "}
                  </span>
                </p>
                <h6 className="font-bold mt-3">
                  8 Inspiring Ways to Wear Dresses in Winter
                </h6>
                <h4 className="text-gray-500 mt-3">
                  Duis ut velit gravida nibh bibendum commodo. Suspendisse
                  pellentesque mattis augue id euismod. Interdum et male-suada
                  fames
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
