export const a = 1;

// import {v1} from 'uuid';
// import profileReducer, {addPostActionCreator, ChangeNewPostTextActionCreator} from './profileReducer';
// import dialogsReducer, {addMessageActionCreator, changeNewMessageTextActionCreator} from './dialogsReducer';
// import sideBarReducer from './sideBarReducer';
// export type PostType = {
//     id: string
//     name: string
//     date: string
//     postContent: string
//     likes: number
//     comments: number
// }
// export type ProfilePageHeaderType = {
//     online: boolean
//     url: string
//     name: string
//     status: string
//     iconId: string
//     title: string
// }
// export type MessageType = {
//     id: string
//     text: string
//     url: string
//     status: string
// }
// export type DialogType = {
//     id: string
//     name: string
//     url: string
//     status: string
//     path: string
// }
// export type FollowingUserType = {
//     id: string
//     name: string
//     size: number,
//     url: string
// }
//
// export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addMessageActionCreator> | ReturnType<typeof ChangeNewPostTextActionCreator> | ReturnType<typeof changeNewMessageTextActionCreator>
//
// export type ProfilePageType = {
//     postTextValue: string
//     header: ProfilePageHeaderType
//     posts: Array<PostType>
// }
// export type DialogsPageType = {
//     newMessageText: string
//     messages: Array<MessageType>
//     dialogs: Array<DialogType>
// }
// export type SideBarType = {
//     title: string
//     followingUsers: Array<FollowingUserType>
// }
//
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sideBar: SideBarType
// }
// export type StoreType = {
//     // _state: StateType
//     // _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsType) => void
// }
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postTextValue: '',
//             header: {
//                 online: true,
//                 url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
//                 name: 'Name Surname',
//                 status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//                 iconId: 'location',
//                 title: 'Saint-Petersburg',
//             },
//             posts: [
//                 {
//                     id: v1(),
//                     name: 'Name Surname',
//                     date: '27 Junary 2023',
//                     postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//                     likes: 13,
//                     comments: 0
//                 },
//                 {
//                     id: v1(),
//                     name: 'Name Surname',
//                     date: '25 Junary 2023',
//                     postContent: 'nibh sit amet commodo nulla facilisi nullam vehicula ipsum a',
//                     likes: 1,
//                     comments: 0
//                 },
//                 {
//                     id: v1(),
//                     name: 'Name Surname',
//                     date: '22 Junary 2023',
//                     postContent: 'Hello, how are you today',
//                     likes: 9,
//                     comments: 0
//                 },
//                 {
//                     id: v1(),
//                     name: 'Name Surname',
//                     date: '20 Junary 2023',
//                     postContent: ' It is my first post',
//                     likes: 23,
//                     comments: 0
//                 },
//
//             ]
//         },
//         dialogsPage: {
//             newMessageText: '',
//             messages: [
//                 {
//                     id: v1(),
//                     text: 'Hi',
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
//                     status: '19:37'
//                 },
//                 {
//                     id: v1(),
//                     text: 'How are you today?',
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
//                     status: '19:38'
//                 },
//                 {
//                     id: v1(),
//                     text: 'Hi, I\'m fine, wby?',
//                     url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
//                     status: '20:02'
//                 },
//                 {
//                     id: v1(),
//                     text: 'Im fine too, thanks',
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
//                     status: '21:13'
//                 },
//                 {
//                     id: v1(),
//                     text: 'Cool Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//                     url: 'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
//                     status: '22:15'
//                 }
//             ],
//             dialogs: [
//                 {
//                     id: v1(),
//                     name: 'Misha Kuznetsov',
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
//                     status: 'here will be last message',
//                     path: '1'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Dasha Bukina',
//                     url: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
//                     status: 'here will be last message',
//                     path: '2'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Dima Sokolov',
//                     url: 'https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1443249407.jpg',
//                     status: 'here will be last message',
//                     path: '3'
//                 },
//                 {
//                     id: v1(),
//                     name: 'ELena Golovach',
//                     url: 'https://media.istockphoto.com/id/1381221247/photo/beautiful-afro-girl-with-curly-hairstyle.jpg?b=1&s=170667a&w=0&k=20&c=0x91osZOkL8EfhTEEGNa2EeCGN2gdMTNULOsUFW_0i4=',
//                     status: 'here will be last message',
//                     path: '4'
//                 },
//             ],
//         },
//         sideBar: {
//             title: 'I\'m Following',
//             followingUsers: [
//                 {
//                     id: v1(),
//                     name: 'Name K.',
//                     size: 48,
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU'
//                 },
//                 {
//                     id: v1(),
//                     name: 'John S.',
//                     size: 48,
//                     url: 'https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1443249407.jpg'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Liza M.',
//                     size: 48,
//                     url: 'data:image/jpeg;base64,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'
//                 }
//             ],
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar     = sideBarReducer(this._state.sideBar, action);
//
//         this._callSubscriber();
//
//     }
// }











