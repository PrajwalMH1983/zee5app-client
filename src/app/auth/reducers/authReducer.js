//rxreducer
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
} from "../../../redux/types/userTypes";
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"), //we will set this token into localStorage after successful login.
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    default:
      return state;
  }
};
