import {AddPostActionType} from "./profile-reducer";
import {AddMessageActionType} from "./dialog-reducer";

type ActionType = AddPostActionType | AddMessageActionType

export type StateType = {
    sidebar: object
}
let initialState:StateType = {sidebar: {}}

export const sidebarReducer = (state: StateType = initialState, action: ActionType) => {

    return state;
}