import { toast } from "react-toastify";

import * as api from "../../api/proscons";
import {
  fetchProsconsRequest,
  fetchProsconsSuccess,
  fetchProsconsFailure,
  addProsconsRequest,
  addProsconsSuccess,
  addProsconsFailure
} from "./actions";

export const fetchProscons = () => async (dispatch, getState) => {
  dispatch(fetchProsconsRequest());
  try {
    const { userId, groupId } = getState().user;
    const res = await api.fetchProscons(userId, groupId);
    dispatch(fetchProsconsSuccess(res.data));
  } catch (e) {
    dispatch(fetchProsconsFailure(e.response.data));
    toast.error("Error during fetching Pros & Cons");
  }
};

export const addProscons = (newItem, type) => async (dispatch, getState) => {
  dispatch(addProsconsRequest());
  try {
    const { userId, groupId } = getState().user;
    const { data } = getState().proscons;

    const dataToSend = {
      ...data,
      [type]: [...data[type], newItem]
    };

    const res = await api.editProscons(userId, groupId, dataToSend);
    dispatch(addProsconsSuccess(res.data));
    toast.success("Added Successfully");
  } catch (e) {
    dispatch(addProsconsFailure(e.response.data));
    toast.error("Error during adding Pros or Cons");
  }
};
