import {
    ActionType,
} from "./state";

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


export const dialogReducer = (state: DialogPageType, action: ActionType) => {

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
