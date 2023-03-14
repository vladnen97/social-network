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
    online: boolean
    url: string
    name: string
    status: string
    iconId: string
    title: string
}
type ProfilePageType = {
    postTextValue: string
    header: ProfilePageHeaderType
    posts: Array<PostType>
}
type ProfilePageActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof ChangeNewPostTextActionCreator>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: ProfilePageType = {
    postTextValue: '',
    header: {
        online: true,
        url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
        name: 'Name Surname',
        status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconId: 'location',
        title: 'Saint-Petersburg',
    },
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
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                name: state.header.name,
                date: new Date().toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'}).slice(0, 13),
                postContent: state.postTextValue,
                likes: 0,
                comments: 0
            }
            state.posts.unshift(newPost);
            state.postTextValue = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.postTextValue = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const ChangeNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const);

export default profileReducer;