//import { CHANGE_LANGUAGE } from '../../constants';
//import { ACTIVE_MENU } from '../../constants';

const ACTIVE_MENU = "ACTIVE_MENU";

const initialState = {
  language: "tr",
  activeMenu: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_MENU:
      return { activeMenu: action.menuItem };

    default:
      break;
  }

  // if (action.type === CHANGE_LANGUAGE) {
  //     return { language: action.targetLanguage };
  // }

  return state;
}

export default reducer;
