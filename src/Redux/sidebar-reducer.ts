import {AddPostActionType, ChangePostActionType} from "./profile-reducer";
import {AddMessageActionType, ChangeMessageActionType} from "./dialog-reducer";

type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType

export type StateType = {
    sidebar: object
}
let initialState:StateType = {sidebar: {}}

export const sidebarReducer = (state: StateType = initialState, action: ActionType) => {

    return state;
}