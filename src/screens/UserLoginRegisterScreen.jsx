import React from "react";
import "../styles/UserRegisterLogin.css";
import { useState } from "react";

const UserLoginRegisterScreen = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="userRegisterBigContainer">
      <div className="userRegisterContainer mt-24">
        <div className="userRegisterFormTitle">
          <h1 className="text-xl font-bold">
            COZA
            <span className="font-semibold">STORE</span>
          </h1>
          <h2 className="font-bold text-xl">
            {signUp === true ? "SIGN-UP" : "LOG-IN"}
          </h2>
        </div>
        <form className="userRegisterForm my-10">
          {signUp === true && (
            <div className="userRegisterName">
              <div className="userRegisterFirstName">
                <label className="font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  className="userRegisterInput border rounded p-1 border-gray-300"
                  placeholder="First Name"
                />
              </div>
              <div className="userRegisterSecondName">
                <label className="font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  className="userRegisterInput border rounded p-1 border-gray-300"
                  placeholder="First Name"
                />
              </div>
            </div>
          )}
          <div className="userRegisterEmailAddress my-2">
            <div className="userRegisterEmail">
              <label className="font-semibold" htmlFor="firstName">
                Email
              </label>
              <input
                type="text"
                className="userRegisterInput border rounded p-1 border-gray-300"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="userRegisterPassword my-2">
            <div className="userRegisterPass">
              <label className="font-semibold" htmlFor="firstName">
                Password
              </label>
              <input
                type="password"
                className="userRegisterInput border rounded p-1 border-gray-300"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="userRegisterLoginButton my-8">
            <button
              className="w-[100%] p-2 text-white font-semibold"
              style={{ backgroundColor: "#242222" }}
            >
              {signUp === true ? "Register" : "LOG-IN"}
            </button>
          </div>
          <p
            onClick={() => {
              setSignUp(!signUp);
            }}
            className="font-semibold w-[100%] text-center cursor-pointer"
          >
            {signUp === true
              ? "Already have an Account? LOG-IN here."
              : "Don't have an account? Register Here."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLoginRegisterScreen;
