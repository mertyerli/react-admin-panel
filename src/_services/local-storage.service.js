export const localStorageService = {
  constants: {
    LANGUAGE_KEY: "lang"
  },
  getItem: key => {
    return JSON.parse(localStorage.getItem(key));
  },
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
