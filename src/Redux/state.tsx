export type DialogType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type DialogPageType = {
    messagesData: MessagesType[],
    dialogsData: DialogType[],
    newMessageText: string,
}

export type ProfilePageType = {
    postsData: PostType[],
    newPostText: string
}

export type StateType = {
    dialogPage: DialogPageType,
    profilePage: ProfilePageType,
}

export type StoreType = {
    _state: StateType,
    _onChangeRender: () => void,
    getState: () => StateType,
    subscribe: (callback: () => void) => void,
    dispatch: (action: ActionType) => void,

    // addPost: () => void,
    // changePostText: (newText: string) => void,
    // addMessage: () => void,
    // changeMessageText: (newText: string) => void,
}

 type AddPostActionType =  ReturnType<typeof addPostActionCreator>
//{
//     type: 'ADD-POST',
// }

export type ChangePostActionType = ReturnType<typeof changePostActionCreator>
//     {
//     type: 'CHANGE-POST-TEXT',
//     newText: string
// }

type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
//     {
//     type: 'ADD-MESSAGE',
// }

export type ChangeMessageActionType = ReturnType<typeof changeMessageActionCreator>
//     {
//     type: 'CHANGE-MESSAGE-TEXT',
//     newText: string
// }


export type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';


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
            newMessageText: 'add message text...',
        },
        profilePage: {
            postsData: [
                {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
                {id: 2, post: 'it`s my first post', likesCount: 42},
            ],
            newPostText: 'add post text...',
        },
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChangeRender()
        } else {
            if (action.type === CHANGE_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText
                this._onChangeRender()
            } else {
                if (action.type === ADD_MESSAGE) {
                    const newMessage: MessagesType = {
                        id: new Date().getTime(),
                        message: this._state.dialogPage.newMessageText
                    }
                    this._state.dialogPage.messagesData.push(newMessage)
                    this._state.dialogPage.newMessageText = ''
                    this._onChangeRender()
                } else {
                    if (action.type === CHANGE_MESSAGE_TEXT) {
                        this._state.dialogPage.newMessageText = action.newText
                        this._onChangeRender()
                    } else {
                        console.log("i don't know this type")
                    }
                }
            }
        }

    },
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, newText: text} as const)
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const changeMessageActionCreator = (text: string) => ({type: CHANGE_MESSAGE_TEXT, newText: text} )
