import {ActionsType, DialogsPageType, MessageType} from './state';
import {v1} from 'uuid';


function dialogsReducer(state: DialogsPageType, action: ActionsType) {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                text: state.newMessageText,
                status: new Date().toTimeString().slice(0, 5),
                url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            break;
    }

    return state
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const changeNewMessageTextActionCreator = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const);

export default dialogsReducer;