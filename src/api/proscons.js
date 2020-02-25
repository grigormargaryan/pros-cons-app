import http from "./http";

export const fetchProscons = (userId, groupId) => {
  return http.get(`proscons/group/${groupId}/user/${userId}`);
};

export const editProscons = (userId, groupId, data) => {
  return http.put(`proscons/group/${groupId}/user/${userId}`, data);
};
