import { combineReducers } from "redux";
import {reducer as form} from 'redux-form';
import { language } from "./language.reducer";
import { ui } from "./ui.reducer";

import { session } from "./session.reducer"; // Faruk
import { style } from "./style.reducer"; // Faruk
// State "keys" are below.
const rootReducer = combineReducers({
  form,
  language,
  ui,
  session,
  style
});

export default rootReducer;
