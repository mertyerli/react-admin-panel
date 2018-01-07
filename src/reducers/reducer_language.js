import { TOOGLE_LANGUAGE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case TOOGLE_LANGUAGE:
      return action.payload;
    default:
      break;
  }
  return state;
}
