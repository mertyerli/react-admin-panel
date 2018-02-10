import { sessionConstants as SC } from "../_constants";



export function signInUser({email, password}){
  return dispatch =>{

  }
}


export const loginActions = {
  loginSuccess: token => {
    return {
      type: SC.LOGIN_SUCCESS,
      payload: token
    };
  },

  loginFail: data => {
    return {
      type: SC.LOGIN_FAIL
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
  },

  pathChange: (path) => {
    return {
      type: SC.CHANGE_PATH,
      payload : path
    };
  },
  
  rememberMe: (data) => {
    return {
      type: SC.REMEMBER_ME,
      payload : data
    };
  }
};
