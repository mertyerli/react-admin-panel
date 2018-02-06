import { uiConstants } from "../_constants";
import { uiService } from "../_services";
//import { alertActions } from './';
//import { history } from '../_helpers';

export const uiActions = {
  fetchSideBar
};

function fetchSideBar() {
  return dispatch => {
    dispatch(request());

    // bilinçli bekletiyoruz 5 sn
    setTimeout(() => {
      uiService
        .fetchSideBar()
        .then(
          items => dispatch(success(items)),
          error => dispatch(failure(error))
        );
    }, 1100);
  };

  function request() {
    return { type: uiConstants.FETCH_SIDEBAR_REQUEST };
  }
  function success(items) {
    return { type: uiConstants.FETCH_SIDEBAR_SUCCESS, payload: items };
  }
  function failure(error) {
    return { type: uiConstants.FETCH_SIDEBAR_FAILURE, payload: error };
  }
}
