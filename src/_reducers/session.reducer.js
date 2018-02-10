import { sessionConstants as SC } from "../_constants";

const initialState = {
  status: SC.SESSION_INIT,
  path: "/",
  rememberMe : false
};

export function session(state = initialState, action) {
  let urlPath = window.location.pathname;
  if (urlPath === "" || urlPath === "/login") {
    urlPath = "/";
  }

  switch (action.type) {
    case SC.LOGIN_SUCCESS:
      return {
        ...state,
        status: SC.AUTHENTICATED,
        path: urlPath,
        token: action.payload
      };
    case SC.LOGIN_FAIL:
      return {
        ...state,
        status: SC.LOGIN_FAIL,
        token: null
      };

    case SC.LOGOUT_REQUEST:
      return {
        ...state,
        status: SC.LOGGED_OUT,
        token: null
      };

    case SC.CHANGE_PATH:
      return {
        ...state,
        path: action.payload
      };
    case SC.REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.payload
      };
    default:
      return state;
  }
}
