import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '34f4521b-34bd-43e1-9cab-da4e95910166'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    setFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    setUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

export const headerAPI = {
    login() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    LoginTo(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
            .then(response => response.data);
    },
    Exit() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    profilesData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}
