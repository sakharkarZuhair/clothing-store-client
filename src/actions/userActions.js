import * as api from "../api/index";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await api.login(formData);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    navigate("/");
    // console.log(data);
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response });
    console.error(error);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};
