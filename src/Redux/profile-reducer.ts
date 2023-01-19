import {AddMessageActionType, ChangeMessageActionType} from "./dialog-reducer";

type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType

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


const initialState = {
    postsData: [
        {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
        {id: 2, post: 'it`s my first post', likesCount: 42},
    ] as Array<PostType>,
    newPostText: ""
}



export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType  => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return {...state}
        case CHANGE_POST_TEXT:
            state.newPostText = action.newText
            return {...state}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, newText: text} as const)
