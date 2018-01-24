import { combineReducers } from "redux";

import { language } from "./language.reducer";
import { ui } from "./ui.reducer";

// State "keys" are below.
const rootReducer = combineReducers({
  language,
  ui
});

export default rootReducer;
