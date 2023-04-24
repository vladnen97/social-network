import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';


export type PostType = {
    id: string
    name: string
    date: string
    postContent: string
    likes: number
    comments: number
}
export type ProfilePageHeaderType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string | null, large: string | null }
    userId: number
} | null
export type ProfilePageType = typeof initialState

export type ProfilePageActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof ChangeNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setIsFetching>

enum ProfileActionTypes {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_LOADING = 'SET-LOADING',
}


const initialState = {
    isLoading: false,
    postTextValue: '',
    header: null as ProfilePageHeaderType,
    posts: [
        {
            id: v1(),
            name: 'Name Surname',
            date: '27 Junary 2023',
            postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            likes: 13,
            comments: 0
        },
        {
            id: v1(),
            name: 'Name Surname',
            date: '25 Junary 2023',
            postContent: 'nibh sit amet commodo nulla facilisi nullam vehicula ipsum a',
            likes: 1,
            comments: 0
        },
        {
            id: v1(),
            name: 'Name Surname',
            date: '22 Junary 2023',
            postContent: 'Hello, how are you today',
            likes: 9,
            comments: 0
        },
        {
            id: v1(),
            name: 'Name Surname',
            date: '20 Junary 2023',
            postContent: ' It is my first post',
            likes: 23,
            comments: 0
        },
    ] as Array<PostType>
}

function profileReducer(state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType {
    switch (action.type) {
        case ProfileActionTypes.SET_USER_PROFILE:
            return {
                ...state,
                header: action.profile
            }
        case ProfileActionTypes.ADD_POST:
            const newPost: PostType = {
                id: v1(),
                name: 'Name Surname',
                date: new Date().toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'}).slice(0, 14),
                postContent: state.postTextValue,
                likes: 0,
                comments: 0
            }
            return {
                ...state,
                postTextValue: '',
                posts: [newPost, ...state.posts]
            }
        case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postTextValue: action.newText
            }
        case ProfileActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.status
            }
        default:
            return state;
    }

}

//action-creators
export const addPost = () => ({type: ProfileActionTypes.ADD_POST} as const);
export const ChangeNewPostText = (newText: string) => ({type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, newText: newText} as const);
export const setUserProfile = (profile: ProfilePageHeaderType) => ({type: ProfileActionTypes.SET_USER_PROFILE, profile} as const)
export const setIsFetching = (status: boolean) => ({type: ProfileActionTypes.SET_LOADING, status} as const)

//thunk-creators
export const getProfile = (userId: string | undefined) => (dispatch: Dispatch<ProfilePageActionsType>) => {
    dispatch(setIsFetching(true))

    profileAPI.getProfileData(userId).then(data => {
        dispatch(setUserProfile(data))
        dispatch(setIsFetching(false))

    })
}

export default profileReducer;