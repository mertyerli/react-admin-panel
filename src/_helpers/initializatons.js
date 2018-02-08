import _ from "lodash";
import { languageActions, uiActions } from "../_actions";
import { languageService, uiService } from "../_services";

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
  },

  sideBar: dispatch => {
    uiService.fetchSideBar();
    dispatch(uiActions.fetchSideBar());

    // let ret = uiService.fetchSideBar().then(data => {
    //   console.log("data", data);
    // });
    // console.log("ret", ret);
  }
};
