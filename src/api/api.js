import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0d08b5d7-b900-4b65-b19c-5dcc568febc1"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
}