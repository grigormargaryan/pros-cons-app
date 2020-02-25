import * as types from "./types";

export const fetchProsconsRequest = () => ({
  type: types.FETCH_PROS_CONS_REQUEST
});

export const fetchProsconsSuccess = data => ({
  type: types.FETCH_PROS_CONS_SUCCESS,
  payload: data
});

export const fetchProsconsFailure = error => ({
  type: types.FETCH_PROS_CONS_FAILURE,
  payload: error
});

export const addProsconsRequest = () => ({
  type: types.ADD_PROS_CONS_REQUEST
});

export const addProsconsSuccess = data => ({
  type: types.ADD_PROS_CONS_SUCCESS,
  payload: data
});

export const addProsconsFailure = error => ({
  type: types.ADD_PROS_CONS_FAILURE,
  payload: error
});
