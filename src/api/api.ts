import axios from 'axios';
import {ProfilePageHeaderType} from '../redux/profileReducer';
import {UserType} from '../redux/usersReducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '31f53cca-e0c7-46c1-88c3-71665c47f40c'
    }
})

type GetUsersType = {
    items: Array<UserType>
    error: string | null
    totalCount: number
}
type SetFollowUnfollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type GetProfileDataType = ProfilePageHeaderType
type GetAuthDataType = {
    data: { id: number, email: string, login: string }
    messages: Array<string>
    resultCode: number
}

export const usersAPI = {
    getUsers(page: number) {
        return instance.get<GetUsersType>(`users?count=12&page=${page}`).then((res) => res.data)
    },
    setFollow(userId: number) {
        return instance.post<SetFollowUnfollowType>(`follow/${userId}`, {}).then((res) => {
            console.log(res.data)
            return res.data
        })
    },
    setUnFollow(userId: number) {
        return instance.delete<SetFollowUnfollowType>(`follow/${userId}`).then((res) => {
            console.log(res.data)
            return res.data
        })
    },
}

export const profileAPI = {
    getProfileData(userId: string | undefined) {
        return instance.get<GetProfileDataType>(`profile/${userId ? userId : 28429}`).then((res) => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get<GetAuthDataType>(`auth/me`).then((res) => res.data)
    }
}
