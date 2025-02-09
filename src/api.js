import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": process.env.REACT_APP_API_KEY,
  },
});

export const usersAPI = {
  getUsers(page, pageSize) {
    return instance.get(`users?page=${page}&count=${pageSize}`).then((res) => res.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data.resultCode);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data.resultCode);
  },
};

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((res) => res.data);
  },
};

export const authAPI = {
  getAuthUser() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
};
