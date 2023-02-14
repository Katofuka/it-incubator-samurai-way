import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADDPOST = 'ADD-POST';
const CHANGEPOSTTEXT = 'CHANGE-POST-TEXT';
const SETUSERPROFILE = 'SET-USER-PROFILE'
const SETUSERSTATUS = 'GET-USER-STATUS'

export type InitialProfileStateType = {
    postsData: PostsType[],
    newPostText: string,
    profile: UserProfileType,
    status: string
}
export type PostsType = {
    id: number
    post: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe: string | undefined
    contacts: {
        facebook: string | undefined
        website: string | undefined
        vk: string | undefined
        twitter: string | undefined
        instagram: string | undefined
        youtube: string | undefined
        github: string | undefined
        mainLink: string | undefined
    }
    lookingForAJob: boolean | undefined
    lookingForAJobDescription: string | undefined
    fullName: string | undefined
    userId: number | undefined
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type ChangePostActionType = ReturnType<typeof changePost>
export type SetUserProfileActionCreatorType = ReturnType<typeof setUserProfileActionCreator>
export type SetUserStatusActionCreatorType = ReturnType<typeof setUserStatusActionCreator>

export type ProfileActionsType = AddPostActionType
    | ChangePostActionType
    | SetUserProfileActionCreatorType
    | SetUserStatusActionCreatorType


const initialState: InitialProfileStateType = {
    postsData: [
        {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
        {id: 2, post: 'it`s my first post', likesCount: 42},
    ] as Array<PostsType>,
    newPostText: "",
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 1,
        photos: {
            small: "",
            large: "",
        }
    },
    status: '',
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case ADDPOST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        case CHANGEPOSTTEXT:
            return {...state, newPostText: action.newText}
        case SETUSERPROFILE:
            return {...state, profile: action.profile}
        case SETUSERSTATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPost = () => ({type: ADDPOST} as const)
export const changePost = (text: string) => ({type: CHANGEPOSTTEXT, newText: text} as const)
export const setUserProfileActionCreator = (profile: UserProfileType) => ({type: SETUSERPROFILE, profile} as const)
export const setUserStatusActionCreator = (status: string) => ({type: SETUSERSTATUS, status} as const)

export const setUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileActionCreator(data))
            })
    }
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.getUserStatus(userId)
            .then(status => {
                dispatch(setUserStatusActionCreator(status))
            })
    }


export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        console.log('thunk dispatch', status)
        profileAPI.updateUserStatus(status)
            .then(data => {
                console.log('dispatch', status)
                if (data.resultCode === 0)
                    dispatch(setUserStatusActionCreator(status))
            })
    }
}
