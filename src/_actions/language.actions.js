import { languageConstants } from "../_constants";

export const languageActions = {
  setItems: items => {
    return {
      type: languageConstants.SET_LANGUAGES,
      payload: items
    };
  },

  toggle: language => {
    return {
      type: languageConstants.TOGGLE,
      payload: language
    };
  },

  setTranslations: items => {
    return {
      type: languageConstants.SET_TRANSLATIONS,
      payload: items
    };
  },

  ready: language => {
    return {
      type: languageConstants.READY,
      payload: null
    };
  }
};
