import "../styles/NavBar.css";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

const NavBar = () => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  // const logout = () => {
  //   dispatch({ type: "USER_LOGOUT" });
  //   navigate("/");
  //   setUser(null);
  // };

  const check = localStorage.getItem("token");
  // console.log(check);

  const logOutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
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
              <Link to="/products">
                <li className="cursor-pointer">Shop</li>
              </Link>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>

              {check ? (
                <li
                  onClick={logOutHandler}
                  className="cursor-pointer bg-black text-white px-3 py-1 rounded transition-all hover:-translate-y-1"
                >
                  Log-Out
                </li>
              ) : (
                <Link to="/login">
                  <li className="cursor-pointer bg-black text-white px-3 py-1 rounded transition-all hover:-translate-y-1">
                    Log-In
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
