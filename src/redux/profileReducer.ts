import {v1} from 'uuid';
import {ActionsType, PostType, ProfilePageType} from './store';


const initialState: ProfilePageType= {
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


function profileReducer(state: ProfilePageType = initialState, action: ActionsType): ProfilePageType {

    switch (action.type) {
        case 'ADD-POST':
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
        case 'UPDATE-NEW-POST-TEXT':
            state.postTextValue = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);
export const ChangeNewPostTextActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const);

export default profileReducer;