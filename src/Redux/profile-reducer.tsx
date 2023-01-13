import {ActionType} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

export type ProfilePageType = {
    postsData: PostType[],
    newPostText: string
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangePostActionType = ReturnType<typeof changePostActionCreator>

export const profileReducer = (state: ProfilePageType, action: ActionType)  => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, newText: text} as const)
