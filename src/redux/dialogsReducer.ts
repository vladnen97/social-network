import {ActionsType, DialogsPageType, MessageType} from './store';
import {v1} from 'uuid';


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
            path: '1'
        },
        {
            id: v1(),
            name: 'Dasha Bukina',
            url: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
            status: 'here will be last message',
            path: '2'
        },
        {
            id: v1(),
            name: 'Dima Sokolov',
            url: 'https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1443249407.jpg',
            status: 'here will be last message',
            path: '3'
        },
        {
            id: v1(),
            name: 'ELena Golovach',
            url: 'https://media.istockphoto.com/id/1381221247/photo/beautiful-afro-girl-with-curly-hairstyle.jpg?b=1&s=170667a&w=0&k=20&c=0x91osZOkL8EfhTEEGNa2EeCGN2gdMTNULOsUFW_0i4=',
            status: 'here will be last message',
            path: '4'
        },
    ],
}


function dialogsReducer(state: DialogsPageType = initialState, action: ActionsType): DialogsPageType {

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
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }


}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const changeNewMessageTextActionCreator = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const);

export default dialogsReducer;