import { toast } from "react-toastify";

import * as api from "../../api/user";
import {
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure
} from "./actions";

export const fetchUserDetails = () => async dispatch => {
  dispatch(fetchUserDetailsRequest());
  try {
    const user = await api.fetchUserId();
    const group = await api.fetchGroupId();

    dispatch(
      fetchUserDetailsSuccess({
        userId: user.data.userId,
        groupId: group.data.groupId
      })
    );
  } catch (e) {
    dispatch(fetchUserDetailsFailure(e.response.data));
    toast.error("Error during fetching user details");
  }
};
