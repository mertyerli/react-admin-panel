import { sessionConstants as SC } from "../_constants";

const initialState = {
  status: SC.SESSION_INIT,
  path : '/',
  data: {}
};

export function session(state = initialState, action) {
  let urlPath = window.location.pathname;
  if ((urlPath === '') || (urlPath === '/login')) {urlPath = '/';}

  switch (action.type) {
    case SC.LOGIN_SUCCESS:
      return {
        status: SC.AUTHENTICATED,
        path : urlPath,
        data: action.payload
      };
    case SC.LOGIN_FAIL:
      return {
        ...state,
        status: SC.LOGIN_FAIL
      };

    case SC.LOGOUT_REQUEST:
      return {
        status: SC.LOGGED_OUT,
        data: {}
      };

    case SC.CHANGE_PATH:
      return {
        ...state,
        path: action.payload 
      };
    default:
      return state;
  }
}
