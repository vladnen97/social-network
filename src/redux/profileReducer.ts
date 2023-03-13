import {ActionsType, PostType, ProfilePageType} from './store';
import {v1} from 'uuid';


function profileReducer(state: ProfilePageType, action: ActionsType) {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                name: state.header.name,
                date: new Date().toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'}).slice(0, 12),
                postContent: state.postTextValue,
                likes: 0,
                comments: 0
            }
            state.posts.unshift(newPost);
            state.postTextValue = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.postTextValue = action.newText;
            break;
    }

    return state
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);
export const ChangeNewPostTextActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const);

export default profileReducer;