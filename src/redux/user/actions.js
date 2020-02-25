import * as types from "./types";

export const fetchUserDetailsRequest = () => ({
  type: types.FETCH_USER_DETAILS_REQUEST
});

export const fetchUserDetailsSuccess = data => ({
  type: types.FETCH_USER_DETAILS_SUCCESS,
  payload: data
});

export const fetchUserDetailsFailure = error => ({
  type: types.FETCH_USER_DETAILS_FAILURE,
  payload: error
});
