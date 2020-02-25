import * as types from "./types";

const initialState = {
  loading: false,
  loaded: false,
  data: {
    pros: [],
    cons: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROS_CONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PROS_CONS_FAILURE:
      return { ...initialState };
    case types.FETCH_PROS_CONS_SUCCESS:
    case types.ADD_PROS_CONS_SUCCESS:
      return {
        loading: false,
        loaded: true,
        data: {
          pros: action.payload.pros || [],
          cons: action.payload.cons || []
        }
      };
    default:
      return state;
  }
};
