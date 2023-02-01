const ADDPOST = 'ADD-POST';
const CHANGEPOSTTEXT = 'CHANGE-POST-TEXT';
const SETUSERPROFILE = 'SET-USER-PROFILE'

export type InitialProfileStateType = typeof initialState

export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type ChangePostActionType = ReturnType<typeof changePost>
export type SetUserProfileActionCreatorType = ReturnType<typeof setUserProfile>

export type ProfileActionsType = AddPostActionType
    | ChangePostActionType
    | SetUserProfileActionCreatorType

const initialState = {
    postsData: [
        {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
        {id: 2, post: 'it`s my first post', likesCount: 42},
    ] as Array<PostType>,
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
    }
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case ADDPOST:
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        case CHANGEPOSTTEXT:
            return {...state, newPostText: action.newText}
        case SETUSERPROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPost = () => ({type: ADDPOST} as const)
export const changePost = (text: string) => ({type: CHANGEPOSTTEXT, newText: text} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SETUSERPROFILE, profile} as const)
