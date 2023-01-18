import {ActionType} from "./store";

export type StateType = {
    sidebar: object
}
let initialState:StateType = {sidebar: {}}

export const sidebarReducer = (state: StateType = initialState, action: ActionType) => {

    return state;
}