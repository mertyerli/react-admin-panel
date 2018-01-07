import axios from "axios";

const FETCH_LANGUAGES = "FETCH_LANGUAGES";
export function fetchLanguages() {
  const url = "/data/languages.json";
  const request = axios.get(url);

  return {
    type: FETCH_LANGUAGES,
    payload: request
  };
}

export const TOOGLE_LANGUAGE = "TOOGLE_LANGUAGE";
export function toggleLanguage(language) {
  return {
    type: TOOGLE_LANGUAGE,
    payload: language
  };
}
