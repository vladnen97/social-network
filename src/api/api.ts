import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "31f53cca-e0c7-46c1-88c3-71665c47f40c"
    }
});


export const getProfileData = (userId: string | undefined) => {
    return instance.get(`profile/${userId ? userId : 28429}`).then((res) => res.data)
}

export const getAuthData = () => {
    return instance.get(`auth/me`).then((res) => res.data)
}

export const getUsers = (page: number) => {
    return instance.get(`users?count=6&page=${page}`).then((res) => res.data)
}

export const setFollow = (userId: number) => {
    return instance.post(`follow/${userId}`, {}).then((res) => res.data)
}

export const setUnFollow = (userId: number) => {
    return instance.delete(`follow/${userId}`).then((res) => res.data)
}
