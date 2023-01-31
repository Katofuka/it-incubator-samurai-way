// type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType
// export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
// export type ChangeMessageActionType = ReturnType<typeof changeMessageActionCreator>

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}
export type FollowUserActionType = ReturnType<typeof followActionCreator>

export type UnfollowUserActionType = ReturnType<typeof unfollowActionCreator>

export type SetUsersActionType = ReturnType<typeof setUsersActionCreator>

export type SetPagesActionType = ReturnType<typeof setPagesActionCreator>

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountActionCreator>


const initialState = {
    items: [] as UserType[],
    pageSize: 50,
    totalCount: 1,
    currentPage: 1,
    isFetching: false
}

export type InitialUsersStateType = typeof initialState


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS'
const SETCURRENTPAGE = 'SET-CURRENT-PAGE'
const SETTOTALUSERSCOUNT = 'SET-TOTAL-USERS-COUNT'



export type UsersActionsType = FollowUserActionType
    | UnfollowUserActionType
    | SetUsersActionType
    | SetPagesActionType
    | SetTotalUsersCountActionType

export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            console.log('follow', action.userId)
            return {
                ...state,
                items: state.items.map(us => us.id === action.userId ? {...us, followed: true} : us)
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(us => us.id === action.userId ? {...us, followed: false} : us)
            }
        case SETUSERS:
            // debugger
            return {...state, items: action.items}
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage}
        case SETTOTALUSERSCOUNT:
            // debugger
            return {...state, totalCount: action.totalCount}

        default:
            return state;
    }
}
export const followActionCreator = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersActionCreator = (users: UserType[]) => ({type: SETUSERS, items: users} as const)
export const setPagesActionCreator = (currentPage: number) => ({type: SETCURRENTPAGE, currentPage: currentPage} as const)
export const setTotalUsersCountActionCreator = (totalCount: number) => ({type: SETTOTALUSERSCOUNT , totalCount: totalCount} as const)