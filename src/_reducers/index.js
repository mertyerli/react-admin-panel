import { combineReducers } from "redux";

import { language } from "./language.reducer";
import { ui } from "./ui.reducer";

import { session } from "./session.reducer"; // Faruk
import { style } from "./style.reducer"; // Faruk
// State "keys" are below.
const rootReducer = combineReducers({
  language,
  ui,
  session,
  style
});

export default rootReducer;
