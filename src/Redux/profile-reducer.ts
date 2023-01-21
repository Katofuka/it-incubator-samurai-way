const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

export type InitialProfileStateType = typeof initialState

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangePostActionType = ReturnType<typeof changePostActionCreator>
export type ProfileActionsType = AddPostActionType | ChangePostActionType

const initialState = {
    postsData: [
        {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
        {id: 2, post: 'it`s my first post', likesCount: 42},
    ] as Array<PostType>,
    newPostText: ""
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: ProfileActionsType): InitialProfileStateType  => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        case CHANGE_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, newText: text} as const)
