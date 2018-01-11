import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../_reducers";

const middlewares = [promiseMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  //const { logger } = require("../middlewares/logger");

  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
console.log("store.", store);
