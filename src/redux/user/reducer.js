import * as types from "./types";

const initialState = {
  loading: false,
  loaded: false,
  userId: null,
  groupId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_USER_DETAILS_FAILURE:
      return { ...initialState };
    case types.FETCH_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        loaded: true,
        userId: payload.userId,
        groupId: payload.groupId
      };
    default:
      return state;
  }
};
