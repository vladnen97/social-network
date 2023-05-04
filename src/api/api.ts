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
type UpdateStatusType = {
    data: {}
    messages: Array<string>
    resultCode: number
}

export const usersAPI = {
    getUsers(page: number) {
        return instance.get<GetUsersType>(`users?count=12&page=${page}`).then((res) => res.data)
    },
    setFollow(userId: number) {
        return instance.post<SetFollowUnfollowType>(`follow/${userId}`, {}).then((res) => res.data)
    },
    setUnFollow(userId: number) {
        return instance.delete<SetFollowUnfollowType>(`follow/${userId}`).then((res) => res.data)
    },
}

export const profileAPI = {
    getProfileData(userId: string) {
        return instance.get<GetProfileDataType>(`profile/${userId}`).then((res) => res.data)
    },
    getProfileStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status`, {status}).then(res => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get<GetAuthDataType>(`auth/me`).then((res) => res.data)
    }
}
