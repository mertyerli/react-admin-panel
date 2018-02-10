export const sessionConstants = {
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    GET_AUTOHORIZATION :'GET_AUTOHORIZATION',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    ACCOUNT_LOCKED: 'LOGIN_LOCKED',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    SESSION_INIT: 'SESSSION_INIT',
    AUTHENTICATED : 'AUTHENTICATED',
    LOGGED_OUT : 'LOGGED_OUT',
    REMEMBER_ME : 'REMEMBER_ME',
    CHANGE_PATH : 'CHANGE_PATH'
  };

  export const loginParams =  {
    username : '', 
    password : '',
    status : false, 
    token : '',
    sessionKey : '',
    firstName : '',
    lastName : '',
    email : '',
    remember : false
  }