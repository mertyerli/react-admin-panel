import axios from "axios";
import { localStorageService } from "../_services";

export const uiService = {
  fetchSideBar
};

function fetchSideBar() {
  let languageKey = localStorageService.getItem(
    localStorageService.constants.LANGUAGE_KEY
  );

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: "/data/menu-items.json",
    params: {
      key: languageKey
    }
  };

  return axios(requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.statusText === "OK") {
    return Promise.reject(response.statusText);
  }

  return response.data;
}
