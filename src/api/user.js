import http from "./http";

export const fetchUserId = () => {
  return http.get("/user/grigor_margaryan");
};

export const fetchGroupId = () => {
  return http.get("/group/grigor_margaryan");
};
