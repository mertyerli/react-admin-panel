import { languageConstants } from "../_constants";
import { localStorageService } from "../_services";

const initialState = {
  loading: true,
  activeLanguage: null,
  items: [],
  translations: []
};

export function language(state = initialState, action) {
  switch (action.type) {
    case languageConstants.SET_LANGUAGES:
      return {
        ...state,
        items: action.payload
      };

    case languageConstants.TOGGLE:
      localStorageService.setItem(
        localStorageService.constants.LANGUAGE_KEY,
        action.payload.key
      );
      return {
        ...state,
        activeLanguage: action.payload
      };

    case languageConstants.SET_TRANSLATIONS:
      return {
        ...state,
        translations: action.payload
      };

    case languageConstants.READY:
      let ret = { ...state };
      delete ret["loading"];
      return ret;

    default:
      return state;
  }
}
