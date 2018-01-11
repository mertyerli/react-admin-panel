import _ from "lodash";
import { languageActions } from "../_actions";
import { languageService } from "../_services";

export const init = {
  languages: dispatch => {
    languageService
      .fetchLanguages()
      .then(response => {
        dispatch(languageActions.setItems(response.data));
        return response.data;
      })
      .then(items => {
        const lang = _.find(items, s => s.isActive === true);
        const activeLanguage = { ...lang };
        delete activeLanguage["isActive"];
        dispatch(languageActions.toggle(activeLanguage));
        return activeLanguage;
      })
      .then(language => {
        languageService
          .fetchTranslations(language.key)
          .then(response => {
            dispatch(languageActions.setTranslations(response.data));
          })
          .then(() => {
            dispatch(languageActions.ready());
          });
      });
  }
};