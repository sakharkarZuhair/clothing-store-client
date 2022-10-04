import React from "react";
import "../styles/UserRegisterLogin.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
// };

const RegisterScreen = () => {
  //   const [signUp, setSignUp] = useState(false);
  // const [formData, setFormData] = useState(initialState);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // console.log(formData);
  return (
    <div className="userRegisterBigContainer">
      <div className="userRegisterContainer mt-24">
        <div className="userRegisterFormTitle">
          <h1 className="text-xl font-bold">
            COZA
            <span className="font-semibold">STORE</span>
          </h1>
          <h2 className="font-bold text-xl">SIGN-UP</h2>
        </div>
        <form className="userRegisterForm my-10">
          <div className="userRegisterName">
            <div className="userRegisterFirstName">
              <label className="font-semibold" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                className="userRegisterInput border rounded p-1 border-gray-300"
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="userRegisterSecondName">
              <label className="font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="userRegisterInput border rounded p-1 border-gray-300"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
          </div>

          <div className="userRegisterEmailAddress my-2">
            <div className="userRegisterEmail">
              <label className="font-semibold" htmlFor="firstName">
                Email
              </label>
              <input
                type="text"
                className="userRegisterInput border rounded p-1 border-gray-300"
                placeholder="Email"
                name="email"
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
                name="password"
              />
            </div>
          </div>
          <div className="userRegisterLoginButton my-8">
            <button
              className="w-[100%] p-2 text-white font-semibold"
              style={{ backgroundColor: "#242222" }}
              type="submit"
            >
              Register
            </button>
          </div>
          <Link to="/login">
            <p className="font-semibold w-[100%] text-center cursor-pointer">
              Already have an Account? LOG-IN here
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
