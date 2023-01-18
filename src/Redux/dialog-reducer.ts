import {
    ActionType,
} from "./store";

export type DialogType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogPageType = {
    messagesData: MessagesType[],
    dialogsData: DialogType[],
    newMessageText: string,
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type ChangeMessageActionType = ReturnType<typeof changeMessageActionCreator>

const  initialState:DialogPageType = {
    messagesData: [
        {id: 1, message: 'Эй алё чё такой вася'},
        {id: 2, message: 'Дароу! кадила?'},
        {id: 3, message: 'Сегодня не оч'},
        {id: 4, message: 'Люблю тортики'},
    ],
    dialogsData: [
        {id: 1, name: 'Semen'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Alesha'},
    ],
    newMessageText: ""
}

export const dialogReducer = (state: DialogPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.newMessageText = ''
            state.messagesData.push(newMessage)
            return state;
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const changeMessageActionCreator = (text: string) => ({type: CHANGE_MESSAGE_TEXT, newText: text})
