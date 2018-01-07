import { combineReducers } from "redux";
//import SideBarMenuReducer from "./reducer-sideBarMenu.";
import LanguageReducer from "./reducer_language";

const rootReducer = combineReducers({
  //sideBarItems: SideBarMenuReducer,
  activeLanguage: LanguageReducer
});

export default rootReducer;
