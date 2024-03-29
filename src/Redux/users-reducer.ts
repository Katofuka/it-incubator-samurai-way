// type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType
// export type AddMessageActionType = ReturnType<typeof addMessage>
// export type ChangeMessageActionType = ReturnType<typeof changeMessage>

import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageActionCreator>

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountActionCreator>

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingActionCreator>

export type ToggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgressActionCreator>

export type InitialUsersStateType = typeof initialState


const initialState = {
    items: [] as UserType[],
    pageSize: 24,
    totalCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS'
const SETCURRENTPAGE = 'SET-CURRENT-PAGE'
const SETTOTALUSERSCOUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLEISFETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLEFOLLOWINGPROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'


export type UsersActionsType = FollowUserActionType
    | ToggleIsFetchingActionType
    | UnfollowUserActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleFollowingInProgressType


export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
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
            return {...state, items: action.items}
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage}
        case SETTOTALUSERSCOUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLEISFETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLEFOLLOWINGPROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetchingFollow
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const followActionCreator = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersActionCreator = (users: UserType[]) => ({type: SETUSERS, items: users} as const)
export const setCurrentPageActionCreator = (currentPage: number) => ({type: SETCURRENTPAGE, currentPage} as const)
export const setTotalUsersCountActionCreator = (totalCount: number) => ({type: SETTOTALUSERSCOUNT, totalCount: totalCount} as const)
export const toggleIsFetchingActionCreator = (isFetching: boolean) => ({type: TOGGLEISFETCHING, isFetching} as const)
export const toggleFollowingInProgressActionCreator = (isFetchingFollow: boolean, userId: number) => (
    {type: TOGGLEFOLLOWINGPROGRESS, isFetchingFollow, userId} as const)

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingInProgressActionCreator(true, userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowActionCreator(userId))
                }
                dispatch(toggleFollowingInProgressActionCreator(false, userId))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingInProgressActionCreator(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followActionCreator(userId))
                }
                dispatch(toggleFollowingInProgressActionCreator(false, userId))
            })
    }
}

export const requestUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetchingActionCreator(true))

        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setCurrentPageActionCreator(currentPage))
                dispatch(toggleIsFetchingActionCreator(false))
                dispatch(setUsersActionCreator(data.items));
                dispatch(setTotalUsersCountActionCreator(data.totalCount));
            })
    }
}