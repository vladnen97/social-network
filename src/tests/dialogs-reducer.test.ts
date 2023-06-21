import dialogsReducer, {addMessage, DialogsPageType} from '../redux/dialogsReducer';


let startState: DialogsPageType
beforeEach(() => {
    startState = {
        messages: [
            {
                id: '1',
                text: 'Hi',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
                status: '19:37'
            },
            {
                id: '2',
                text: 'How are you today?',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU',
                status: '19:38'
            },
        ],
        dialogs: []
    }
})

it('app should be intialized', () => {
    const endState = dialogsReducer(startState, addMessage('message text'))

    expect(endState.messages[2].text).toBe('message text')
})