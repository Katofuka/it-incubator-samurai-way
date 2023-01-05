export type dialogType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}
export type postType = {
    id: number
    post: string
    likesCount: number
}

export type dialogPageType = {
    messagesData: messagesType[]
    dialogsData: dialogType[]
}

export type profilePageType = {
    postsData: postType[]
}

export type stateType = {
    dialogPage: dialogPageType,
    profilePage: profilePageType,
}


export let addPost = (postMessage:string ) => {
    let newPost:postType = {
        id: 5,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
}

export const state: stateType = {
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
    },
    profilePage: {
        postsData: [
            {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
            {id: 2, post: 'it`s my first post', likesCount: 42},
        ]
    },
}