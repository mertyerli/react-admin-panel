import axios from "axios";
import { sessionConstants as SC } from "../_constants";

const ROOT_URL = "http://172.25.15.25:3090";


const getAuthorization = ({ email, password }) => {
  return axios
    .post(`${ROOT_URL}/signin`, { email, password })
    .catch(()=>{});
};


const getCookieAuthorization = token => {
  console.log(">>> Cookie Authorization Needed <<<");
  return SC.LOGIN_SUCCESS; //getAuthorization("", token).status;
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
