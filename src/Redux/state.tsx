
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
    getState: ()=> StateType,
    addPost: ()=> void,
    changePostText: (newText: string)=>void,
    addMessage: ()=> void,
    changeMessageText: (newText: string) => void,
    _onChangeRender: () => void,
    subscribe: (callback: ()=>void) => void
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

    getState() {
      return this._state;
    },

    addPost() {
        let newPost: PostType = {
            id: new Date().getTime(),
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        console.log('test')
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChangeRender()
    },

    changePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChangeRender()
    },

    addMessage() {
        const newMessage: MessagesType = {
            id: new Date().getTime(),
            message: this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.messagesData.push(newMessage)
        this._state.dialogPage.newMessageText = ''
        this._onChangeRender()
    },

    changeMessageText(newText: string) {
        this._state.dialogPage.newMessageText = newText
        this._onChangeRender()
    },

    _onChangeRender() {
        console.log('rerendering state')
    },

    subscribe(callback: ()=>void) {
        this._onChangeRender = callback
    }
}
//store - OOP