// type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType
// export type AddMessageActionType = ReturnType<typeof addMessage>
// export type ChangeMessageActionType = ReturnType<typeof changeMessage>

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
export type FollowUserActionType = ReturnType<typeof follow>

export type UnfollowUserActionType = ReturnType<typeof unfollow>

export type SetUsersActionType = ReturnType<typeof setUsers>

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>


const initialState = {
    items: [] as UserType[],
    pageSize: 25,
    totalCount: 1,
    currentPage: 1,
    isFetching: false,
}

export type InitialUsersStateType = typeof initialState


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS'
const SETCURRENTPAGE = 'SET-CURRENT-PAGE'
const SETTOTALUSERSCOUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLEISFETCHING = 'TOGGLE-IS-FETCHING'


export type UsersActionsType = FollowUserActionType
    | ToggleIsFetchingActionType
    | UnfollowUserActionType
    | SetUsersActionType
    | SetCurrentPageActionType
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
        case TOGGLEISFETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}
export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SETUSERS, items: users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SETCURRENTPAGE,currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SETTOTALUSERSCOUNT, totalCount: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLEISFETCHING,isFetching} as const)