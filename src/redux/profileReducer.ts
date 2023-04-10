import {v1} from 'uuid';


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
export type ProfilePageType = {
    postTextValue: string
    header: ProfilePageHeaderType
    posts: Array<PostType>
}
export type ProfilePageActionsType = ReturnType<typeof addPost> | ReturnType<typeof ChangeNewPostText> | ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState: ProfilePageType = {
    postTextValue: '',
    header: null,
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
    ]
}


function profileReducer(state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType {

    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                header: action.profile
            }
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postTextValue: action.newText
            }
        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST} as const);
export const ChangeNewPostText = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const);
export const setUserProfile = (profile: ProfilePageHeaderType) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer;