import { sessionConstants as SC } from "../_constants";

export const loginActions = {
  loginSuccess: data => {
    return {
      type: SC.LOGIN_SUCCESS,
      payload: data
    };
  },

  loginFail: data => {
    return {
      type: SC.LOGIN_FAIL,
      payload: data
    };
  },

  loginLocked: error => {
    return {
      type: SC.ACCOUNT_LOCKED,
      payload: error
    };
  },

  logout: () => {
    return {
      type: SC.LOGOUT_REQUEST
    };
  }
};
