//import axios from "axios";
import { loginParams, sessionConstants as SC } from "../_constants";

const getAuthorization = (username, password) => {
  const recParams = loginParams;
  recParams.status = SC.LOGIN_FAIL;
  // git username/pass i bir yerlerden onayla. geriye de sessionID ve diger parametreleri dondur.
  username === "a"
    ? (recParams.status = SC.LOGIN_SUCCESS)
    : (recParams.status = SC.LOGIN_FAIL);

  recParams.username = username;
  recParams.password = password;
  if (recParams.status === SC.LOGIN_SUCCESS) {
    recParams.firstName = "Faruk";
    recParams.lastName = "Yerli";
    recParams.token = "ASDer$%!";
  }
  return recParams;
};

const getCookieAuthorization = (Cusername, Ctoken) => {
  let username = "";
  let token = "";
  try {
    username = Cusername;
    token = Ctoken;
  } catch (err) {
    console.log("Error  : ");
  }
  return getAuthorization(username, token).status;
};

const userLogout = () => {
  return true;
};

const lockAccount = () => {
  return;
};

export const loginAPI = {
  getAuthorization,
  userLogout,
  lockAccount,
  getCookieAuthorization
};
