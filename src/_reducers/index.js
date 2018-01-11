import { combineReducers } from "redux";

import { language } from "./language.reducer";

// State "keys" are below.
const rootReducer = combineReducers({
  language
});

export default rootReducer;
