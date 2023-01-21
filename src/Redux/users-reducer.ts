// type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType
// export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
// export type ChangeMessageActionType = ReturnType<typeof changeMessageActionCreator>

export type UserType = {
    id: number
    photo: string
    fullName: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}
export type FollowUserActionType = ReturnType<typeof followActionCreator>

export type UnfollowUserActionType = ReturnType<typeof unfollowActionCreator>

export type SetUsersActionType = ReturnType<typeof setUsersActionCreator>


const initialState = {
    users: [] as UserType[],
}

export type InitialUsersStateType = typeof initialState


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS'

export type UsersActionsType = FollowUserActionType | UnfollowUserActionType | SetUsersActionType

export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            console.log('follow', action.userId)
            return {
                ...state,
                users: state.users.map(us => us.id === action.userId ? {...us, followed: false} : us)
            }
        case UNFOLLOW:
            console.log('unfollow', action.userId)
            return {
                ...state,
                users: state.users.map(us => us.id === action.userId ? {...us, followed: true} : us)
            }
        case SETUSERS:
            return {...state, users: action.users}
        default:
            return state;
    }
}
export const followActionCreator = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersActionCreator = (users: UserType[]) => ({type: SETUSERS, users: users} as const)
