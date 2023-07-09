import axios from 'axios';
import {ProfilePageHeaderType} from '../redux/profileReducer';
import {UserType} from '../redux/usersReducer';

export type ResponseType<D = {}> = {
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
export type UpdateProfileData = {
    userId: number
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

}

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
    getProfileData(userId: number) {
        return instance.get<GetProfileDataType>(`profile/${userId}`).then((res) => res.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status}).then(res => res.data)
    },
    uploadPhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<{ photos: { small: string, large: string } }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            return res.data
        })
    },
    updateProfileData(model: UpdateProfileData) {
        return instance.put<ResponseType>('/profile', model).then(res => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>(`auth/me`).then((res) => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`).then(res => res.data)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`).then(res => res.data)
    }
}
