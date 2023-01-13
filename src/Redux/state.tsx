import {AddPostActionType, ChangePostActionType, ProfilePageType, profileReducer} from "./profile-reducer";
import {AddMessageActionType, ChangeMessageActionType, DialogPageType, dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StateType = {
    dialogPage: DialogPageType,
    profilePage: ProfilePageType,
    sidebar: object
}
export type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType

export type StoreType = {
    _state: StateType,
    _onChangeRender: () => void,
    getState: () => StateType,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionType) => void,
}

export const store: StoreType = {
    _state: {
        dialogPage: {
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
            newMessageText: '',
        },
        profilePage: {
            postsData: [
                {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
                {id: 2, post: 'it`s my first post', likesCount: 42},
            ],
            newPostText: '',
        },
        sidebar: {}
    },

    _onChangeRender() {
        console.log('rerendering state')
    },

    getState() {
        return this._state;
    },

    subscribe(callback: () => void) {
        this._onChangeRender = callback
    },

    dispatch(action: ActionType) { //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state, action)

        this._onChangeRender()
    },
}

