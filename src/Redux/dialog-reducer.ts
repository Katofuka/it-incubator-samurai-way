export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

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
}


export type DialogsActionsType = AddMessageActionType
export const dialogReducer = (state: InitialDialogStateType = initialState, action: DialogsActionsType):InitialDialogStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newMessageText
            }
            return {...state,
                messagesData: [...state.messagesData, newMessage]};

        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText: newMessageText} as const)

