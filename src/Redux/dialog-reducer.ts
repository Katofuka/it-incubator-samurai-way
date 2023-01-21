export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type ChangeMessageActionType = ReturnType<typeof changeMessageActionCreator>

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type InitialDialogStateType = typeof initialState

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const  initialState = {
    messagesData: [
        {id: 1, message: 'Эй алё чё такой вася'},
        {id: 2, message: 'Дароу! кадила?'},
        {id: 3, message: 'Сегодня не оч'},
        {id: 4, message: 'Люблю тортики'},
    ] as Array<MessageType>,
    dialogsData: [
        {id: 1, name: 'Semen'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Alesha'},
    ]as Array<DialogType>,
    newMessageText: ""
}


export type DialogsActionsType = AddMessageActionType | ChangeMessageActionType
export const dialogReducer = (state: InitialDialogStateType = initialState, action: DialogsActionsType):InitialDialogStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            return {...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''};
        case CHANGE_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const changeMessageActionCreator = (text: string) => ({type: CHANGE_MESSAGE_TEXT, newText: text})
