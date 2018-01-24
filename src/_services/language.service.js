import axios from "axios";

export const languageService = {
  fetchLanguages,
  fetchTranslations
};

function fetchLanguages() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: "/data/languages.json"
    //body: JSON.stringify({ param1, param2 })
  };
  return axios(requestOptions);
}
function fetchTranslations(languageKey) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: "/data/translations.json",
    params: {
      key: languageKey
    }
  };
  return axios(requestOptions);
}
