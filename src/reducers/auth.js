import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const loginReducer = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      //   console.log(action?.payload);
      localStorage.setItem("token", JSON.stringify(action?.payload.token));
      //   localStorage.setItem("userInfo", JSON.stringify(action?.payload?.result));
      return { ...state, loading: false, userInfo: action?.payload?.result };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
