import {v1} from 'uuid';


type MessageType = {
    id: string
    text: string
    url: string
    status: string
}
export type DialogType = {
    id: string
    name: string
    url: string
    status: string
    path: string
}
export type DialogsPageType = {
    newMessageText: string
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type DialogsPageActionsType = ReturnType<typeof addMessage> | ReturnType<typeof changeNewMessageText>

enum DialogsActionTypes {
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
}


const initialState: DialogsPageType = {
    newMessageText: '',
    messages: [
        {
            id: v1(),
            text: 'Hi',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
            status: '19:37'
        },
        {
            id: v1(),
            text: 'How are you today?',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
            status: '19:38'
        },
        {
            id: v1(),
            text: 'Hi, I\'m fine, wby?',
            url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
            status: '20:02'
        },
        {
            id: v1(),
            text: 'Im fine too, thanks',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
            status: '21:13'
        },
        {
            id: v1(),
            text: 'Cool Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
            status: '22:15'
        }
    ],
    dialogs: [
        {
            id: v1(),
            name: 'Misha Kuznetsov',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
            status: 'here will be last message',
            path: '/dialogs/1'
        },
        {
            id: v1(),
            name: 'Dasha Bukina',
            url: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
            status: 'here will be last message',
            path: '/dialogs/2'
        },
        {
            id: v1(),
            name: 'Dima Sokolov',
            url: 'https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1443249407.jpg',
            status: 'here will be last message',
            path: '/dialogs/3'
        },
        {
            id: v1(),
            name: 'ELena Golovach',
            url: 'https://media.istockphoto.com/id/1381221247/photo/beautiful-afro-girl-with-curly-hairstyle.jpg?b=1&s=170667a&w=0&k=20&c=0x91osZOkL8EfhTEEGNa2EeCGN2gdMTNULOsUFW_0i4=',
            status: 'here will be last message',
            path: '/dialogs/4'
        },
    ],
}


function dialogsReducer(state: DialogsPageType = initialState, action: DialogsPageActionsType): DialogsPageType {

    switch (action.type) {
        case DialogsActionTypes.ADD_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                text: state.newMessageText,
                status: new Date().toTimeString().slice(0, 5),
                url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }

        case DialogsActionTypes.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }


}

export const addMessage = () => ({type: DialogsActionTypes.ADD_MESSAGE} as const)
export const changeNewMessageText = (newText: string) => ({type: DialogsActionTypes.UPDATE_NEW_MESSAGE_TEXT, newText: newText} as const);

export default dialogsReducer;