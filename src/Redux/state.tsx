export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type postType = {
    id: number
    post: string
    likesCount: number
}

export type stateType = {

    dialogsData: dialogType[],
    messagesData: messageType[],
    postsData: postType[]
}

export const state: stateType = {
    messagesPage: {
        messagesData: [
            {id: 1, message: 'Эй алё чё такой вася'},
            {id: 2, message: 'Дароу! кадила?'},
            {id: 3, message: 'Сегодня не оч'},
            {id: 4, message: 'Люблю тортики'},
        ],
    },
    profilePage: {
        dialogsData: [
            {id: 1, name: 'Semen'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ksenia'},
            {id: 4, name: 'Alesha'},
        ],
        postsData: [
            {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
            {id: 2, post: 'it`s my first post', likesCount: 42},
        ]
    },


}