import axios from 'axios';
import {ProfilePageHeaderType} from '../redux/profileReducer';
import {UserType} from '../redux/usersReducer';

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type GetUsersType = {
    items: Array<UserType>
    error: string | null
    totalCount: number
}
type GetProfileDataType = ProfilePageHeaderType

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '31f53cca-e0c7-46c1-88c3-71665c47f40c'
    }
})


export const usersAPI = {
    getUsers(page: number) {
        return instance.get<GetUsersType>(`users?count=12&page=${page}`).then((res) => res.data)
    },
    setFollow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {}).then((res) => res.data)
    },
    setUnFollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then((res) => res.data)
    },
}

export const profileAPI = {
    getProfileData(userId: number | null) {
        return instance.get<GetProfileDataType>(`profile/${userId}`).then((res) => res.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status}).then(res => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>(`auth/me`).then((res) => res.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`).then(res => res.data)
    }
}
