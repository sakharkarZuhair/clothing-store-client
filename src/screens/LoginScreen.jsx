import React from "react";
import "../styles/UserRegisterLogin.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.login);
  const { loading, error, userInfo } = userLogin;
  // console.log(userInfo);

  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  // console.log(formData);
  return (
    <div className="userRegisterBigContainer">
      <div className="userRegisterContainer mt-24">
        <div className="userRegisterFormTitle">
          <h1 className="text-xl font-bold">
            COZA
            <span className="font-semibold">STORE</span>
          </h1>
          <h2 className="font-bold text-xl">LOG-IN</h2>
        </div>
        <form className="userRegisterForm my-10" onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="userRegisterLoginButton my-8">
            <button
              type="submit"
              className="w-[100%] p-2 text-white font-semibold"
              style={{ backgroundColor: "#242222" }}
            >
              LOG-IN
            </button>
          </div>
          <Link to="/signup">
            <p className="font-semibold w-[100%] text-center cursor-pointer">
              Don't have an account? Register Here
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
